import * as jsdom from 'jsdom';
import * as superagent from 'superagent';
import {URL} from 'url';

import * as utils from './utils';
import {BioPortalGetter, GitHubGetter} from '../config';

type BaseTechniqueCollection = {
  pid: string;
  parents: string[];
};

type OwlTechniqueCollection = BaseTechniqueCollection & {
  prefLabel: string;
  synonym: string[];
  children: string[];
};

export type TechniqueCollection =
  | BaseTechniqueCollection
  | OwlTechniqueCollection;

interface BaseTechniqueNodes {
  leaves: string[];
  parents: {[key: string]: string[]};
}

interface GitHubTechniqueNodes extends BaseTechniqueNodes {
  children: {[key: string]: string[]};
}

interface BioPortalNodes {
  // eslint-disable-next-line  @typescript-eslint/naming-convention
  '@id': string;
  prefLabel: string;
  synonym: string[];
  // eslint-disable-next-line  @typescript-eslint/naming-convention
  children: {'@id': string}[];
  // eslint-disable-next-line  @typescript-eslint/naming-convention
  parents: {'@id': string; prefLabel?: string | null}[];
}

type TechniqueNodes = BioPortalNodes | Element;

export type TechniqueOntology = {
  collection: TechniqueCollection[];
  relatives: {[key: string]: Set<string>};
};

class OntologyTechnique implements TechniqueOntology {
  keys: string[] = ['pid', 'parents'];
  collection: BaseTechniqueCollection[];
  relatives: {[key: string]: Set<string>};

  *processCollection(
    collection: TechniqueNodes[] | NodeList,
  ): Generator<TechniqueCollection> {
    this.collection = [];
    let index = 0;
    while (index < collection.length) {
      const col = collection[index];

      const processed: TechniqueCollection = this.keys.reduce(
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (obj: any, key: string) => {
          obj[key] = this[key as keyof TechniqueCollection](
            col as TechniqueNodes | Element,
          );
          return obj;
        },
        {},
      );
      yield processed;
      this.collection.push(processed);
      index++;
    }
  }

  buildNodes(collection: Generator<TechniqueCollection>): BaseTechniqueNodes {
    const o: BaseTechniqueNodes = {leaves: [], parents: {}};
    for (const node of collection) {
      this.processInCollectionLoop(node, o);
    }
    return o;
  }

  processInCollectionLoop(node: TechniqueCollection, o: BaseTechniqueNodes) {}

  async build(): Promise<this> {
    this.composeURL();
    const collection = this.processCollection(await this.getCollection());
    const nodes = this.buildNodes(collection);
    const relatives = utils.buildForest(nodes.leaves, nodes.parents);
    this.relatives = relatives;
    return this;
  }

  composeURL() {}

  async getCollection(): Promise<BioPortalNodes[] | NodeList> {
    throw new Error("Method 'getCollection()' must be implemented.");
  }

  filterLeaves(node: OwlTechniqueCollection): string | [] {
    if (node['children'].length === 0) return node.pid;
    return [];
  }

  pid(item: TechniqueNodes, key?: string): string | null {
    throw new Error("Method 'pid()' must be implemented.");
  }

  parents(item: TechniqueNodes): string[] {
    throw new Error("Method 'parents()' must be implemented.");
  }
}

export class GitHubOwlTechnique extends OntologyTechnique {
  repoURL: string;
  commit: string;
  file: string;
  url: string;
  collection: OwlTechniqueCollection[];
  equivalentClasses: {[key: string]: string[]};
  disjointClasses: {[key: string]: string[]};

  constructor(config: GitHubGetter) {
    super();
    config = config ?? {};
    this.repoURL =
      config.url ??
      'https://github.com/ExPaNDS-eu/ExPaNDS-experimental-techniques-ontology/releases/';
    this.commit = config.commit
      ? `download/${config.commit}`
      : 'latest/download';
    this.file = config.file ?? 'PaNET.owl';
    this.equivalentClasses = {};
    this.disjointClasses = {};
    this.keys.push(...['prefLabel', 'synonym']);
  }

  composeURL() {
    this.url = new URL(
      `${this.commit}/${this.file}`,
      this.repoURL.endsWith('/') ? this.repoURL : `${this.repoURL}/`,
    ).toString();
  }

  async getCollection(): Promise<NodeList> {
    const xmlFile = await superagent.get(this.url).responseType('blob');
    const xmlParsed = new jsdom.JSDOM(xmlFile.body.toString('utf-8'), {
      contentType: 'application/xml',
    });
    return xmlParsed.window.document.querySelectorAll(
      'owl\\:Class[rdf\\:about]',
    );
  }

  equivalentClass(item: Element): string[] {
    const pid = this.pid(item);
    const eqClasses = item.getElementsByTagName('owl:equivalentClass');
    const intersections: string[] = [];
    let i = 0;
    while (i < eqClasses.length) {
      const klass = this.pid(eqClasses[i], 'rdf:resource');
      if (klass) {
        this.equivalentClasses[pid] = (
          this.equivalentClasses[pid] || []
        ).concat(klass);
        this.equivalentClasses[klass] = (
          this.equivalentClasses[klass] || []
        ).concat(pid);
      } else intersections.push(...this.intersectionOf(eqClasses[i]));
      i++;
    }
    return intersections;
  }

  intersectionOf(eqClass: Element) {
    const intersection = eqClass.getElementsByTagName('owl:intersectionof');
    const intersections = [];
    let j = 0;
    while (j < intersection.length) {
      let k = 0;
      const intersectionClasses =
        intersection[j].getElementsByTagName('rdf:description');
      while (k < intersectionClasses.length) {
        intersections.push(this.pid(intersectionClasses[k], 'rdf:about'));
        k++;
      }
      j++;
    }
    return intersections;
  }

  pid(item: Element, key = 'rdf:about'): string {
    return item.getAttribute(key) as string;
  }

  prefLabel(item: Element): string {
    const label = item.getElementsByTagName('rdfs:label')[0];
    return utils.removeExtraSpaces(
      (label ? label.textContent : this.pid(item).split('/').pop()) as string,
    );
  }

  synonym(item: Element): string[] {
    const altLabel = item.getElementsByTagName('skos:altLabel');
    const synonyms = [];
    let i = 0;
    while (i < altLabel.length) {
      synonyms.push(utils.removeExtraSpaces(altLabel[i].textContent as string));
      i++;
    }
    return synonyms;
  }

  parents(item: Element): string[] {
    const subClassOf = item.getElementsByTagName('rdfs:subClassOf');
    const parentsList = [];
    let i = 0;
    while (i < subClassOf.length) {
      const parent = this.pid(subClassOf[i], 'rdf:resource');
      parentsList.push(parent);
      i++;
    }
    const parents = new Set([...parentsList, ...this.equivalentClass(item)]);
    this.disjointWith(item).forEach(disjoint => parents.delete(disjoint));
    return [...parents];
  }

  buildNodes(
    collection: Generator<OwlTechniqueCollection>,
  ): BaseTechniqueNodes {
    const o = super.buildNodes(collection);
    this.postProcessCollectionAndNodes(o as GitHubTechniqueNodes);
    return o;
  }

  childrenFromEquivalentClass(o: GitHubTechniqueNodes, pid: string) {
    return [
      ...new Set([
        ...(o['children'][pid] || []),
        ...(this.equivalentClasses[pid] || []).reduce(
          (eq: string[], c: string) => (
            eq.push(...(o['children'][c] || [])), eq
          ),
          [],
        ),
      ]),
    ];
  }

  parentsFromEquivalentClass(node: OwlTechniqueCollection) {
    return [
      ...new Set([
        ...node.parents,
        ...node.parents.reduce(
          (eq: string[], p: string) => (
            eq.push(...(this.equivalentClasses[p] || [])), eq
          ),
          [],
        ),
      ]),
    ];
  }

  disjointWith(item: Element) {
    const pid = this.pid(item);
    const disjointClasses = item.getElementsByTagName('owl:disjointWith');
    let i = 0;
    const disjoints = [];
    while (i < disjointClasses.length) {
      const klass = this.pid(disjointClasses[i], 'rdf:resource');
      if (klass) disjoints.push(klass);
      i++;
    }
    this.disjointClasses[pid] = disjoints;
    return disjoints;
  }

  processInCollectionLoop(
    node: OwlTechniqueCollection,
    o: GitHubTechniqueNodes,
  ) {
    if (!o['children']) o['children'] = {};
    for (const parent of node.parents)
      o['children'][parent] = (o['children'][parent] || []).concat(node.pid);
  }

  postProcessCollectionAndNodes(o: GitHubTechniqueNodes) {
    this.collection.map(e => {
      e['children'] = this.childrenFromEquivalentClass(o, e.pid);
      e['parents'] = this.parentsFromEquivalentClass(e);
      o['parents'][e.pid] = e.parents;
      o['leaves'] = o['leaves'].concat(this.filterLeaves(e));
    });
  }

  async build(): Promise<this> {
    await super.build();
    Object.entries(this.disjointClasses).map(([key, value]) =>
      value.forEach(v => this.relatives[key].delete(v)),
    );
    return this;
  }
}

export class BioPortalTechniques extends OntologyTechnique {
  collection: OwlTechniqueCollection[];
  bioURL: string;
  url: string;
  apiKey: string;
  headers: {};
  queryParams: {};

  constructor(config: BioPortalGetter) {
    super();
    config = config || {};
    this.bioURL =
      config.url ?? 'https://data.bioontology.org/ontologies/PANET/classes';
    this.apiKey = config.apiKey || '';
    this.keys.push(...['prefLabel', 'synonym', 'children']);
  }

  composeURL() {
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `apikey token=${this.apiKey}`,
    };
    this.queryParams = {include: 'children,prefLabel,synonym,parents'};
    this.url = new URL(this.bioURL).toString();
  }

  async getCollection(): Promise<BioPortalNodes[]> {
    const [url, headers, queryParams] = [
      this.url,
      this.headers,
      this.queryParams,
    ];
    const page = 1;
    const res = await superagent
      .get(url)
      .query(Object.assign(queryParams, {page: page}))
      .set(headers);
    const body = JSON.parse(res.text);
    const collection = body.collection;
    const promises = utils.range(page + 1, body.pageCount).map(p =>
      superagent
        .get(url)
        .query(Object.assign(queryParams, {page: p}))
        .set(headers)
        .then((out: {text: string}) => JSON.parse(out.text).collection),
    );
    return collection.concat(...(await Promise.all(promises)));
  }

  pid(item: BioPortalNodes): string {
    return item['@id'];
  }

  prefLabel(item: BioPortalNodes): string {
    return utils.removeExtraSpaces(item.prefLabel);
  }

  synonym(item: BioPortalNodes): string[] {
    return item.synonym.map(e => utils.removeExtraSpaces(e));
  }

  children(item: BioPortalNodes): string[] {
    return item.children.map(child => child['@id']);
  }

  parents(item: BioPortalNodes): string[] {
    if (item.parents.filter(e => e['prefLabel']).length === 0) {
      return [];
    } else {
      return item.parents.map(parent => parent['@id']);
    }
  }

  processInCollectionLoop(node: OwlTechniqueCollection, o: BaseTechniqueNodes) {
    o['leaves'] = o['leaves'].concat(this.filterLeaves(node));
    o['parents'][node.pid] = node['parents'];
  }
}

export type TechniqueGetterClass = GitHubOwlTechnique | BioPortalTechniques;

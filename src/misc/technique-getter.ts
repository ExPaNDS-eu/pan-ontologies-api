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
  children: {[key: string]: string[]};
}

interface BioPortalNodes {
  '@id': string;
  prefLabel: string;
  synonym: string[];
  children: {'@id': string}[];
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
    const o: BaseTechniqueNodes = {leaves: [], parents: {}, children: {}};
    for (const node of collection) {
      const pid = node['pid'];
      this.leavesNode(node, o);
      o['parents'][pid] = node['parents'];
    }
    return o;
  }

  leavesNode(node: TechniqueCollection, o: BaseTechniqueNodes) {}

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
  parentsSet: Set<string>;
  url: string;
  collection: OwlTechniqueCollection[];
  equivalentClass: {[key: string]: string[]};

  constructor(config: GitHubGetter) {
    super();
    config = config ?? {};
    this.repoURL =
      config.url ??
      'https://raw.githubusercontent.com/ExPaNDS-eu/ExPaNDS-experimental-techniques-ontology';
    this.commit = config.commit ?? 'master';
    this.file = config.file ?? 'source/PaNET.owl';
    this.parentsSet = new Set();
    this.equivalentClass = {};
    this.keys.push(...['prefLabel', 'synonym']);
  }

  composeURL() {
    this.url = new URL(
      `${this.commit}/${this.file}`,
      this.repoURL.endsWith('/') ? this.repoURL : `${this.repoURL}/`,
    ).toString();
  }

  async getCollection(): Promise<NodeList> {
    const xmlFile = await superagent.get(this.url);
    const xmlParsed = new jsdom.JSDOM(xmlFile.text);
    return xmlParsed.window.document.querySelectorAll(
      'owl\\:Class[rdf\\:about]',
    );
  }

  intersectionOf(item: Element): string[] {
    const pid = this.pid(item);
    const eqClass = item.getElementsByTagName('owl:equivalentClass');
    const intersections: string[] = [];
    let i = 0;
    while (i < eqClass.length) {
      const klass = this.pid(eqClass[i], 'rdf:resource');
      if (klass) {
        this.equivalentClass[pid] = (this.equivalentClass[pid] || []).concat(
          klass,
        );
        this.equivalentClass[klass] = (
          this.equivalentClass[klass] || []
        ).concat(pid);
      }
      const intersection =
        eqClass[i].getElementsByTagName('owl:intersectionof');
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
      i++;
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
      this.parentsSet.add(parent);
      i++;
    }
    const parents = [
      ...new Set([...parentsList, ...this.intersectionOf(item)]),
    ];
    this.parentsSet = new Set([...this.parentsSet, ...parents]);
    return parents;
  }

  buildNodes(
    collection: Generator<OwlTechniqueCollection>,
  ): BaseTechniqueNodes {
    const o = super.buildNodes(collection);
    o['leaves'] = this.filterLeaves(o);
    return o;
  }

  childrenFromEquivalentClass(o: BaseTechniqueNodes, pid: string) {
    return [
      ...new Set([
        ...(o['children'][pid] || []),
        ...(this.equivalentClass[pid] || []).reduce(
          (eq: string[], c: string) => (
            eq.push(...(o['children'][c] || [])), eq
          ),
          [],
        ),
      ]),
    ];
  }

  leavesNode(node: OwlTechniqueCollection, o: BaseTechniqueNodes) {
    for (const parent of node.parents)
      o['children'][parent] = (o['children'][parent] || []).concat(node.pid);
  }

  filterLeaves(o: BaseTechniqueNodes): string[] {
    return this.collection.reduce(
      (out: string[], e) => (
        (e['children'] = this.childrenFromEquivalentClass(o, e.pid)),
        (e['parents'] = [
          ...new Set([
            ...e.parents,
            ...e.parents.reduce(
              (eq: string[], p: string) => (
                eq.push(...(this.equivalentClass[p] || [])), eq
              ),
              [],
            ),
          ]),
        ]),
        (o['parents'][e.pid] = e.parents),
        !this.parentsSet.has(e.pid) ? out.push(e.pid) : null,
        out
      ),
      [],
    );
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

  leavesNode(node: OwlTechniqueCollection, o: BaseTechniqueNodes) {
    if (node['children'].length === 0) o['leaves'].push(node.pid);
    o['children'][node.pid] = node.children;
  }
}

export type TechniqueGetterClass = GitHubOwlTechnique | BioPortalTechniques;

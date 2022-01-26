import * as jsdom from "jsdom"
import * as superagent from "superagent"
import { XmlObject } from '@loopback/rest';
import { URL } from 'url';

import * as utils from "./utils";
import { BioPortalGetter, GitHubGetter } from "../config"


type baseTechniqueCollection = {
  pid: string,
  parents: string[]
}

type GitHubOwlTechniqueCollection = baseTechniqueCollection & {
  prefLabel: string,
  synonym: string[]
}

type BioPortalTechniqueCollection = GitHubOwlTechniqueCollection & {
  children: string[]
}

export type techniqueCollection = baseTechniqueCollection | GitHubOwlTechniqueCollection | BioPortalTechniqueCollection

interface baseTechniqueNodes {
  leaves: string[]
  parents: { [key: string]: string[] }
}

interface BioPortalNodes {
  "@id": string,
  prefLabel: string,
  synonym: string[],
  children: { "@id": string }[]
  parents: { "@id": string, prefLabel: string }[]
}

type techniqueNodes = BioPortalNodes | XmlObject

class OntologyTechnique {

  keys: string[] = ["pid", "parents"];
  collection: baseTechniqueCollection[]
  relatives: { [key: string]: Set<string> }

  * processCollection(collection: techniqueNodes[]): Generator<techniqueCollection> {
    this.collection = [];
    let index = 0;
    while (index < collection.length) {
      const col = collection[index];
      const processed: techniqueCollection = this.keys.reduce((obj: any, key: string) => {
        obj[key] = this[key as keyof techniqueCollection](col);
        return obj;
      }, {});
      yield processed;
      this.collection.push(processed);
      index++;
    }
  }

  buildNodes(collection: Generator<techniqueCollection>): baseTechniqueNodes {
    const o: baseTechniqueNodes = { "leaves": [], "parents": {} };
    for (var node of collection) {
      const _id = node["pid"];
      this.leavesNode(node, o);
      o["parents"][_id] = node["parents"];
    }
    return o;
  }

  leavesNode(node: any, o: baseTechniqueNodes) { }

  async build(): Promise<this> {
    this.composeURL();
    const collection = this.processCollection(
      await this.getCollection());
    const nodes = this.buildNodes(collection);
    const relatives = utils.buildForest(nodes.leaves, nodes.parents);
    this.relatives = relatives;
    return this;
  }

  composeURL() { }

  async getCollection(): Promise<any> { }

  pid(item: any, key?: string): string {
    throw new Error("Method 'pid()' must be implemented.");
  }

  parents(item: any): string[] {
    throw new Error("Method 'parents()' must be implemented.");
  }

}

export class GitHubOwlTechnique extends OntologyTechnique {

  repoURL: string
  commit: string
  file: string
  parentsSet: Set<string>
  url: URL
  collection: GitHubOwlTechniqueCollection[];

  constructor(config: GitHubGetter) {
    super();
    config = config || {};
    this.repoURL = config.url ||
      "https://raw.githubusercontent.com/ExPaNDS-eu/ExPaNDS-experimental-techniques-ontology";
    this.commit = config.commit || "master";
    this.file = config.file || "source/PaNET.owl";
    this.parentsSet = new Set();
    this.keys.push(...["prefLabel", "synonym"]);
  }

  composeURL() {
    this.url = new URL(
      `${this.commit}/${this.file}`,
      this.repoURL.endsWith("/") ? this.repoURL : `${this.repoURL}/`
    );
  }

  async getCollection(): Promise<XmlObject> {
    const xmlFile = await superagent.get(this.url.toString());
    const xmlParsed = new jsdom.JSDOM(xmlFile.text);
    return xmlParsed.window.document.querySelectorAll(
      "owl\\:Class[rdf\\:about]");
  }

  pid(item: XmlObject, key = "rdf:about"): string {
    return item.getAttribute(key);
  }

  prefLabel(item: XmlObject): string {
    const label = item.getElementsByTagName("rdfs:label")[0];
    return utils.removeExtraSpaces(
      label ? label.textContent : this.pid(item).split("/").pop()
    );
  }

  synonym(item: XmlObject): string[] {
    const altLabel = item.getElementsByTagName("skos:altLabel");
    const synonyms = [];
    for (let i = 0; i < altLabel.length; i++)
      synonyms.push(utils.removeExtraSpaces(altLabel[i].textContent));
    return synonyms;
  }

  parents(item: XmlObject): string[] {
    const subClassOf = item.getElementsByTagName("rdfs:subClassOf");
    const _parents = [];
    for (let i = 0; i < subClassOf.length; i++) {
      const parent = this.pid(subClassOf[i], "rdf:resource");
      _parents.push(parent);
      this.parentsSet.add(parent);
    }
    return _parents;
  }

  buildNodes(collection: Generator<GitHubOwlTechniqueCollection>): baseTechniqueNodes {
    const o = super.buildNodes(collection);
    o["leaves"] = this.filterLeaves();
    return o;
  }

  filterLeaves(): string[] {
    return this.collection.reduce(
      (out: string[], e) => (!this.parentsSet.has(e.pid) ? out.push(e.pid) : null, out),
      []);
  }

}

export class BioPortalTechniques extends OntologyTechnique {

  collection: BioPortalTechniqueCollection[];
  bioURL: string
  url: URL
  apiKey: string
  headers: {}
  queryParams: {}

  constructor(config: BioPortalGetter) {
    super();
    config = config || {};
    this.bioURL = config.url || "";
    this.apiKey = config.apiKey || "";
    this.keys.push(...["prefLabel", "synonym", "children"]);
  }

  composeURL() {
    this.headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `apikey token=${this.apiKey}`,
    };
    this.queryParams = { "include": "children,prefLabel,synonym,parents" };
    this.url = new URL(this.bioURL);
  }

  async getCollection(): Promise<BioPortalNodes[]> {
    const [url, headers, queryParams] = [
      this.url.toString(), this.headers, this.queryParams];
    const page = 1;
    const res = await superagent.get(url).query(
      Object.assign(queryParams, { page: page })).set(headers);
    const body = JSON.parse(res.text);
    var collection = body.collection;
    const promises = utils.range(page + 1, body.pageCount).map(
      p =>
        superagent.get(url).query(
          Object.assign(queryParams, { page: p })
        ).set(headers).then(
          (res: { text: string }) => JSON.parse(res.text).collection
        )
    );
    return collection.concat(...await Promise.all(promises));
  }

  pid(item: BioPortalNodes): string {
    return item["@id"];
  }

  prefLabel(item: BioPortalNodes): string {
    return utils.removeExtraSpaces(item.prefLabel);
  }

  synonym(item: BioPortalNodes): string[] {
    return item.synonym.map(e => utils.removeExtraSpaces(e));
  }

  children(item: BioPortalNodes): string[] {
    return item.children.map(child => child["@id"]);
  }

  parents(item: BioPortalNodes): string[] {
    if (item.parents.filter(e => e["prefLabel"]).length == 0) {
      return [];
    }
    else {
      return item.parents.map(parent => parent["@id"]);
    }
  }

  leavesNode(node: BioPortalTechniqueCollection, o: baseTechniqueNodes) {
    if (node["children"].length == 0) o["leaves"].push(node.pid);
  }

}


export type techniqueGetterClass = GitHubOwlTechnique | BioPortalTechniques

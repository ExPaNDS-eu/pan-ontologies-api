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

  // /**
  //  * Sets the list of keys to parse the response
  //  */

  // constructor() {
  //   this.keys = ["pid", "parents"];
  // }

  /**
   * From the list of responses it applies a first processing, applying the
   * methods defined in the class which have the name of the keys.
   * @param {object[]} collection List of objects each being an item from the
   * response
   * @returns {Generator} Generator having applied the methods defined in the
   * class which have the name of the keys
   */

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

  /**
   * From the list of responses, it creates an object where firstKey is the
   * type of object and as value a second object with an id and where the value
   * is the response.firstKey
   * @param {object[]} collection List of objects each being an item from the
   * response
   * @returns {Object} Object where firstKey is the type of object and as value
   * a second object with an id and where the value is response.firstKey
   */

  buildNodes(collection: Generator<techniqueCollection>): baseTechniqueNodes {
    const o: baseTechniqueNodes = { "leaves": [], "parents": {} };
    for (var node of collection) {
      const _id = node["pid"];
      this.leavesNode(node, o);
      o["parents"][_id] = node["parents"];
    }
    return o;
  }

  /**
   * Defines a function to use to compute the leaves nodes
   */

  leavesNode(node: any, o: baseTechniqueNodes) { }

  /**
   * Builds and sets a graph with key the id of the item and value the
   * relatives (ancestor or descendants)
   * @returns {OntologyTechnique} Returns the instance with the attributes set
   */

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

  /**
   * Enforces pid implementation
   */

  pid(item: any, key?: string): string {
    throw new Error("Method 'pid()' must be implemented.");
  }

  /**
   * Enforces prefLabel implementation
   */

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

  /**
   * Sets repoURL, commit and file to use to get data from GitHub
   * @param {object} config Object with the repoURL, commit and file to use to
   * access GitHub
   */

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

  /**
   * Sets the url to use
   */

  composeURL() {
    this.url = new URL(
      `${this.commit}/${this.file}`,
      this.repoURL.endsWith("/") ? this.repoURL : `${this.repoURL}/`
    );
  }

  /**
   * Filters the response from the GitHub file to get owl classes
   * @returns {HTMLElement} Jsdom element containing the owl classes
   */

  async getCollection(): Promise<XmlObject> {
    const xmlFile = await superagent.get(this.url.toString());
    const xmlParsed = new jsdom.JSDOM(xmlFile.text);
    return xmlParsed.window.document.querySelectorAll(
      "owl\\:Class[rdf\\:about]");
  }

  /**
   * Returns the pid from the jsdom element removing extra white spaces
   * @returns {string} The pid from the jsdom element
   */

  pid(item: XmlObject, key = "rdf:about"): string {
    return item.getAttribute(key);
  }

  /**
   * Returns the prefLabel from the jsdom element removing extra white spaces
   * @returns {string} The prefLabel from the jsdom element
   */

  prefLabel(item: XmlObject): string {
    const label = item.getElementsByTagName("rdfs:label")[0];
    return utils.removeExtraSpaces(
      label ? label.textContent : this.pid(item).split("/").pop()
    );
  }

  /**
   * Returns the synonym list from the jsdom element removing extra white spaces
   * @returns {string[]} The synonym list from the jsdom element
   */

  synonym(item: XmlObject): string[] {
    const altLabel = item.getElementsByTagName("skos:altLabel");
    const synonyms = [];
    for (let i = 0; i < altLabel.length; i++)
      synonyms.push(utils.removeExtraSpaces(altLabel[i].textContent));
    return synonyms;
  }

  /**
   * Returns the parents list from the jsdom element removing extra white spaces
   * @returns {string[]} The parents list from the jsdom element
   */

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

  /**
   * Calls the parent buildNodes method and creates the leaves list
   * @returns {object} An object as described in the parent method
   */

  buildNodes(collection: Generator<GitHubOwlTechniqueCollection>): baseTechniqueNodes {
    const o = super.buildNodes(collection);
    o["leaves"] = this.filterLeaves();
    return o;
  }

  /**
   * Returns the pids of the leaves and appends to an array
   * @returns {Array} An array with pid of the leaves
   */

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

  /**
   * Sets url and apikey to use to get data from BioPortal
   * @param {object} config Object with the url and the apiKey to use to
   * access BioPortal
   */

  constructor(config: BioPortalGetter) {
    super();
    config = config || {};
    this.bioURL = config.url || "";
    this.apiKey = config.apiKey || "";
    this.keys.push(...["prefLabel", "synonym", "children"]);
  }

  /**
   * Sets the url, the queryParams and the headers to use
   */

  composeURL() {
    this.headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `apikey token=${this.apiKey}`,
    };
    this.queryParams = { "include": "children,prefLabel,synonym,parents" };
    this.url = new URL(this.bioURL);
  }

  /**
   * Concats together the responses of BioPortal from different pages
   * @returns {Array} List of responses from BioPortal
   */

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

  /**
   * Removes the extra white spaces from the input item
   * @param {object} item Object with values with extra white spaces
   * @returns {string} String with extra white spaces removed
   */

  pid(item: BioPortalNodes): string {
    return item["@id"];
  }

  /**
   * Removes the extra white spaces from the input item
   * @param {object} item Object with values with extra white spaces
   * @returns {string} String with extra white spaces removed
   */

  prefLabel(item: BioPortalNodes): string {
    return utils.removeExtraSpaces(item.prefLabel);
  }

  /**
   * Removes the extra white spaces from each string in the array
   * @param {object} item Object of values potentially with extra white spaces
   * @returns {string[]} Array of strings with extra white spaces removed
   */

  synonym(item: BioPortalNodes): string[] {
    return item.synonym.map(e => utils.removeExtraSpaces(e));
  }

  /**
   * Takes the element '@id' from each object in the item array
   * @param {object} item Object of values each with '@id' key
   * @returns {string[]} Array of strings being the value of '@id' in each
   * object in the input array
   */

  children(item: BioPortalNodes): string[] {
    return item.children.map(child => child["@id"]);
  }

  /**
   * Takes the element '@id' from each object in the item array unless all
   * objects in the array have prefLabel null, thus return []
   * @param {object} item Object of values each with '@id' and prefLabel keys
   * @returns {string[]} Array of strings being the value of '@id' in each
   * object in the input array or []
   */

  parents(item: BioPortalNodes): string[] {
    if (item.parents.filter(e => e["prefLabel"]).length == 0) {
      return [];
    }
    else {
      return item.parents.map(parent => parent["@id"]);
    }
  }

  /**
   * If the node has no children it add it to the leaves list
   * @param {object} node Object with at least children and pid keys
   * @param {object} o Object containing the leaves value where to add leaves
   */

  leavesNode(node: BioPortalTechniqueCollection, o: baseTechniqueNodes) {
    if (node["children"].length == 0) o["leaves"].push(node.pid);
  }

}


export type techniqueGetterClass = GitHubOwlTechnique | BioPortalTechniques

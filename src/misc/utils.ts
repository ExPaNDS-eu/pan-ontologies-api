/**
 * From a single rooted graph it builds an object with the node as a key and the
 *  list relatives (ancestors or descendants) as value
 * @param {string} node Name or id of the node where to start
 * @param {object} relatives Object with key the node and list of nearest
 * relatives (parents or children) as value
 * @param {object} [ids] Object with a map relatives list to ids
 * @param {object} [tree] Object used to store the output
 * @returns {object} Object with the node as a key and the list relatives
 * (ancestors or descendants) as value
 */

export function buildTree(
  node: string|number, 
  relatives: {[key: string|number]: any[]}, 
  ids: {[key: string|number]: string|number} = {}, 
  tree: {[key: string|number]: Set<any>} = {}
  ): {[key: string|number]: Set<any>} {
  tree[node] = tree[node] || new Set([ids[node] || node]);
  if (!relatives[node]) return tree;
  relatives[node].map(
    relative => (
      tree[relative] = tree[relative] || new Set([ids[relative] || relative]),
      tree[node].forEach(i => tree[relative].add(i)),
      buildTree(relative, relatives, ids, tree)

    )
  );
  return tree;
};

/**
 * It combines many single rooted graphs togheter to create a composition of
 * graphs
 * @param {string[]} startList List of names of starting nodes of single rooted
 * graphs
 * @param {Array} relatives Object with key the node and list of nearest
 * relatives (parents or children) as value
 * @param {object} [ids] Object with a map relatives list to ids
 * @returns {object} Object with the node as a key and the list relatives
 * (ancestors or descendants) as value
 */

export function buildForest(
  startList: Array<string|number>, 
  relatives: {[key: string|number]: any[]}, 
  ids: {[key: string|number]: string|number} = {}
  ): {[key: string|number]: Set<any>} {
  return startList.reduce((o, start) => (
    buildTree(start, relatives, ids, o),
    o
  ),
  {}
  )
  };

/**
 * Returns a list of integers included in [start, end]
 * @param {number} start Integer where to start the range from. Its value is
 * included in the returned list
 * @param {number} end Integer where to end the range. Its value is included in
 * the returned list
 * @returns {Array} List of integers
 */

export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
};

/**
 * Unions each array belonging to the same key of each object
 * @param {object} listOfObjects List of objects having a list as value of
 * keyOfObject
 * @param {object} keyOfObject Key to use to get the list from each object
 * @returns {object} Object with key keyOfObject and value of arrays containing
 * the union of the object keyOfObject property
 */

export function unionArraysOfObjects(
  listOfObjects: any[], 
  keyOfObject: string | number): {[key: string | number]: any[]} {
  return {
    [keyOfObject]: [...new Set(listOfObjects.reduce((start: any[], array) => (
      start.push(...array[keyOfObject]), start),
    [])
    )]
  }
};

/**
 * Given a string, it removes the extra spaces
 * @param {string} item A string, potentially with extra spaces
 * @returns {string} The item, without the extra spaces
 */

export function removeExtraSpaces(item: string): string {return item.replace(/\s+/g, " ").trim()};

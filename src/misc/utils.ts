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

export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
};

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

export function removeExtraSpaces(item: string): string {return item.replace(/\s+/g, " ").trim()};

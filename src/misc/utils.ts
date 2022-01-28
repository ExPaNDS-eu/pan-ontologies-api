export function buildTree(
  node: string | number,
  relatives: {[key: string | number]: string[] | number[]},
  ids: {[key: string | number]: string | number | undefined} = {},
  tree: {[key: string | number]: Set<string | number>} = {},
): {[key: string | number]: Set<string | number>} {
  tree[node] = tree[node] ?? new Set([ids[node] ?? node]);
  if (!relatives[node]) return tree;
  relatives[node].map(
    relative => (
      (tree[relative] = tree[relative] ?? new Set([ids[relative] ?? relative])),
      tree[node].forEach(i => tree[relative].add(i)),
      buildTree(relative, relatives, ids, tree)
    ),
  );
  return tree;
}

export function buildForest(
  startList: Array<string | number>,
  relatives: {[key: string | number]: string[] | number[]},
  ids: {[key: string | number]: string | number} = {},
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
): {[key: string | number]: Set<any>} {
  return startList.reduce(
    (o, start) => (buildTree(start, relatives, ids, o), o),
    {},
  );
}

export function range(start: number, end: number): number[] {
  return Array.from({length: end - start + 1}, (_, i) => start + i);
}

export function unionArraysOfObjects(
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  listOfObjects: any[],

  keyOfObject: string | number,
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
): {[key: string | number]: any[]} {
  return {
    [keyOfObject]: [
      ...new Set(
        listOfObjects.reduce(
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          (start: any[], array) => (start.push(...array[keyOfObject]), start),
          [],
        ),
      ),
    ],
  };
}

export function removeExtraSpaces(item: string): string {
  return item.replace(/\s+/g, ' ').trim();
}

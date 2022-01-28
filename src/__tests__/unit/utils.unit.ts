import {expect} from 'chai';

import * as utils from '../../misc/utils';

describe('utils', () => {
  describe('buildTree', () => {
    const tests = [
      {
        args: {
          node: 'a',
          relatives: {
            a: ['b', 'c'],
            b: ['d'],
            c: ['d', 'e'],
            d: [],
            e: ['f'],
            f: [],
          },
          ids: {},
          tree: {},
        },
        expected: {
          a: new Set(['a']),
          b: new Set(['a', 'b']),
          c: new Set(['a', 'c']),
          d: new Set(['a', 'b', 'c', 'd']),
          e: new Set(['a', 'c', 'e']),
          f: new Set(['a', 'c', 'e', 'f']),
        },
        message: 'a tree without using id mapping ',
      },
      {
        args: {
          node: 'a',
          relatives: {
            a: ['b', 'c'],
            b: ['d'],
            c: ['d', 'e'],
            d: [],
            e: ['f'],
            f: [],
          },
          ids: {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6},
          tree: {},
        },
        expected: {
          a: new Set([1]),
          b: new Set([1, 2]),
          c: new Set([1, 3]),
          d: new Set([1, 2, 3, 4]),
          e: new Set([1, 3, 5]),
          f: new Set([1, 3, 5, 6]),
        },
        message: 'a tree using id mapping ',
      },
      {
        args: {
          node: 'a',
          relatives: {
            a: ['b', 'c'],
            b: ['d'],
            c: ['d', 'e'],
            d: [],
            e: ['f'],
            f: [],
          },
          ids: {},
          tree: {z: new Set([100])} as {[key: string]: Set<number>},
        },
        expected: {
          a: new Set(['a']),
          b: new Set(['a', 'b']),
          c: new Set(['a', 'c']),
          d: new Set(['a', 'b', 'c', 'd']),
          e: new Set(['a', 'c', 'e']),
          f: new Set(['a', 'c', 'e', 'f']),
          z: new Set([100]),
        },
        message: 'a tree using a preexisting tree object',
      },
    ];
    tests.forEach(({args, expected, message}) => {
      context(`${message}`, () => {
        it(`should return a ${message}`, done => {
          expect(
            utils.buildTree(args.node, args.relatives, args.ids, args.tree),
          ).to.eql(expected);
          done();
        });
      });
    });
  });

  describe('buildForest', () => {
    context(
      'Creates an object with the node as a key and the list ancestors as value',
      () => {
        it('Object with the node as a key and the list ancestors as value', done => {
          const args = {
            startList: ['a', 'q', 'z'],
            relatives: {
              a: ['b', 'c'],
              b: ['d'],
              c: ['d'],
              d: [],
              q: ['p'],
              p: ['c'],
              z: ['b', 'p'],
            },
          };
          const expected = {
            a: new Set(['a']),
            b: new Set(['a', 'b', 'z']),
            c: new Set(['a', 'c', 'p', 'q', 'z']),
            d: new Set(['a', 'b', 'c', 'd', 'p', 'q', 'z']),
            p: new Set(['q', 'p', 'z']),
            q: new Set(['q']),
            z: new Set(['z']),
          };
          expect(utils.buildForest(args.startList, args.relatives)).to.eql(
            expected,
          );
          done();
        });
      },
    );
  });

  describe('range', () => {
    context('Creates a list of integers included in [start, end]', () => {
      it('List of integers included in [start, end]', done => {
        expect(utils.range(5, 10)).to.eql([5, 6, 7, 8, 9, 10]);
        done();
      });
    });
  });

  describe('unionArraysOfObjects', () => {
    context(
      `Creates an object with key keyOfObject and value of arrays containing
      the union of the object keyOfObject property`,
      () => {
        it(`Object with key keyOfObject and value of arrays containing the
        union of the object keyOfObject property`, done => {
          const input = [{key: [123, 456, 789]}, {key: ['abc', 'def']}];
          const expected = {
            key: [123, 456, 789, 'abc', 'def'],
          };
          expect(utils.unionArraysOfObjects(input, 'key')).to.eql(expected);
          done();
        });
      },
    );
  });

  describe('removeExtraSpaces', () => {
    const tests = [
      {args: 'a b      c ', expected: 'a b c', message: 'with extra spaces'},
      {args: 'd e f', expected: 'd e f', message: 'with no extra spaces'},
    ];
    tests.forEach(({args, expected, message}) => {
      context(`String with ${message}`, () => {
        it(`The item with ${message} replaced`, done => {
          expect(utils.removeExtraSpaces(args)).to.eql(expected);
          done();
        });
      });
    });
  });
});

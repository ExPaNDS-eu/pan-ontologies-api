import {Where} from '@loopback/repository';
import {expect} from 'chai';
import {createSandbox} from 'sinon';
const sandbox = createSandbox();

import {
  OntologyTechniquesLoopbackCacheBuilder,
  selectTechniqueBuilder,
  FreeFormTechniques,
} from '../../misc/technique-filter-builder';
import {Technique} from '../../models';
import {TechniqueRepository} from '../../repositories';

afterEach(done => {
  sandbox.restore();
  done();
});

describe('OntologyTechniquesLoopbackCacheBuilder', () => {
  const techniqueCache = new OntologyTechniquesLoopbackCacheBuilder({
    class: 'GitHubOwlTechnique',
    url: 'http://aUrl.com',
    apiKey: 'aKey',
    cache: {class: 'LoopbackCache', sttl: 10, model: new Technique()},
  });

  describe('prepareForCache', () => {
    context(
      `Tranforms an object with the structure of BioPortalTechniques to
          a format that can be used by LoopbackCache`,
      () => {
        it('A generator with a format that can be used by LoopbackCache', done => {
          const args = {
            relatives: {'1': new Set(['2', '3']), '2': new Set(['3', '4'])},
            collection: [
              {
                pid: '1',
                prefLabel: 'a',
                synonym: ['A'],
                parents: ['A'],
                children: ['2', '3'],
              },
              {
                pid: '2',
                prefLabel: 'b',
                synonym: ['B'],
                parents: ['A'],
                children: ['3'],
              },
            ],
          };
          const expected = [
            {
              pid: '1',
              name: 'a',
              synonym: ['A'],
              relatives: ['2', '3'],
              createdAt: 1,
              children: ['2', '3'],
              parents: ['A'],
            },
            {
              pid: '2',
              name: 'b',
              synonym: ['B'],
              relatives: ['3', '4'],
              createdAt: 1,
              children: ['3'],
              parents: ['A'],
            },
          ];

          sandbox.stub(Date, 'now').returns(1);

          const results = [];
          for (const result of techniqueCache.prepareForCache(args))
            results.push(result);
          expect(results).to.be.eql(expected);
          done();
        });
      },
    );
  });

  describe('createSynonym', () => {
    const tests = [
      {
        args: {name: 'a', pid: 1},
        expected: {synonym: 'a', pid: 1},
        message: 'replacing name with synonym',
      },
      {
        args: {pid: 2},
        expected: null,
        message: 'returning null as NAME key is missing',
      },
    ];
    tests.forEach(({args, expected, message}) => {
      context(
        `Returns the same filter structure used by the NAME field, ${message}`,
        () => {
          it(`${message}`, done => {
            expect(techniqueCache.createSynonym(args)).to.be.eql(expected);
            done();
          });
        },
      );
    });
  });

  describe('transformToPositive', () => {
    const tests = [
      {
        args: {name: 'a'},
        expected: [{name: 'a'}, false],
        message: 'simple filter',
      },
      {
        args: {name: {eq: 'a'}},
        expected: [{name: {eq: 'a'}}, false],
        message: 'one level filter unchanged',
      },
      {
        args: {name: {neq: 'a'}},
        expected: [{name: {eq: 'a'}}, true],
        message: 'one level filter made positive',
      },
      {
        args: {name: {name1: {neq: 'a'}}},
        expected: [{name: {name1: {eq: 'a'}}}, true],
        message: 'two level filter made positive',
      },
      {
        args: {name: {neq: {name1: 'a'}}},
        expected: [{name: {eq: {name1: 'a'}}}, true],
        message: 'two level filter made positive, swapped',
      },
    ];
    tests.forEach(({args, expected, message}) => {
      context(`Returns modified loopback filter, ${message}`, () => {
        it(`${message}`, done => {
          expect(techniqueCache.transformToPositive(args)).to.be.eql(expected);
          done();
        });
      });
    });
  });

  describe('flat', () => {
    context(
      `Starting from loopback filter it adds synonym to it and returns the
      relatives`,
      () => {
        it(`Object the filter + synonym, joined by an OR condition, and returns
        the relatives`, done => {
          const args = {name: 'a', pid: '1'};
          const expected = {pid: {inq: ['1', '2', '3', '4']}};
          const mock = sandbox
            .stub(techniqueCache.cache, 'get')
            .resolves([
              {relatives: ['1', '2'], name: 'a'} as Technique,
              {relatives: ['3', '4'], synonym: ['a']} as Technique,
            ]);
          techniqueCache
            .flat(args)
            .then(data => {
              expect(data).to.be.eql(expected);
              /* eslint-disable no-unused-expressions */
              expect(
                mock.calledWith({
                  where: {
                    or: [
                      {name: 'a', pid: '1'} as Where<Technique>,
                      {synonym: 'a', pid: '1'} as Where<Technique>,
                    ],
                  },
                }),
              ).to.true;
              done();
            })
            .catch(done);
        });
      },
    );
  });

  describe('and', () => {
    context(
      `Starting from loopback AND filter it adds synonym to it and returns the
      intersection of relatives`,
      () => {
        it(`Object the filter + synonym, joined by an OR condition, and returns
        the intersection of relatives`, done => {
          const args = [{name: 'a', pid: '1'}, {pid: '2'}];
          const mock = sandbox
            .stub(techniqueCache.cache, 'get')
            .onCall(0)
            .resolves([
              {relatives: ['1', '2'], name: 'a'} as Technique,
              {relatives: ['3', '4'], name: 'a'} as Technique,
            ])
            .onCall(1)
            .resolves([
              {relatives: ['2', '5'], pid: '2'} as Technique,
              {relatives: ['1', '7'], pid: '2'} as Technique,
            ]);
          const expected = {
            and: [
              {pid: {inq: ['1', '2', '3', '4']}},
              {pid: {inq: ['2', '5', '1', '7']}},
            ],
          };
          techniqueCache
            .andOr(args, 'and')
            .then(data => {
              expect(data).to.be.eql(expected);
              /* eslint-disable no-unused-expressions */
              expect(
                mock.getCall(0).calledWith({
                  where: {
                    or: [
                      {name: 'a', pid: '1'} as Where<Technique>,
                      {synonym: 'a', pid: '1'} as Where<Technique>,
                    ],
                  },
                }),
              ).to.true;
              /* eslint-disable no-unused-expressions */
              expect(
                mock
                  .getCall(1)
                  .calledWith({where: {pid: '2'} as Where<Technique>}),
              ).to.true;
              done();
            })
            .catch(done);
        });
      },
    );
  });

  describe('or', () => {
    context(
      `Starting from loopback OR filter it adds synonym to it and returns the
      intersection of relatives`,
      () => {
        it(`Object the filter + synonym, joined by an OR condition, and returns
        the intersection of relatives`, done => {
          const args = [{name: 'a', pid: '1'}, {pid: {neq: '2'}}];
          const mock = sandbox
            .stub(techniqueCache.cache, 'get')
            .onCall(0)
            .resolves([
              {relatives: ['1', '2'], name: 'a'} as Technique,
              {relatives: ['3', '4'], name: 'a'} as Technique,
            ])
            .onCall(1)
            .resolves([
              {relatives: ['2', '5'], pid: '3'} as Technique,
              {relatives: ['1', '7'], pid: '3'} as Technique,
            ]);
          const expected = {
            or: [
              {pid: {inq: ['1', '2', '3', '4']}},
              {pid: {nin: ['2', '5', '1', '7']}},
            ],
          };
          techniqueCache
            .andOr(args, 'or')
            .then(data => {
              expect(data).to.be.eql(expected);
              /* eslint-disable no-unused-expressions */
              expect(
                mock.getCall(0).calledWith({
                  where: {
                    or: [
                      {name: 'a', pid: '1'} as Where<Technique>,
                      {synonym: 'a', pid: '1'} as Where<Technique>,
                    ],
                  },
                }),
              ).to.true;
              /* eslint-disable no-unused-expressions */
              expect(
                mock
                  .getCall(1)
                  .calledWith({where: {pid: {eq: '2'}} as Where<Technique>}),
              ).to.true;
              done();
            })
            .catch(done);
        });
      },
    );
  });

  describe('buildFilter', () => {
    const tests = [
      {
        args: {and: {name: 'a', pid: 1}},
        expected: 'and',
        message: 'AND',
      },
      {
        args: {or: {name: 'a', pid: 1}},
        expected: 'or',
        message: 'OR',
      },
      {
        args: {name: 'a', pid: 1},
        expected: 'flat',
        message: 'FLAT',
      },
    ];
    tests.forEach(({args, expected, message}) => {
      context(
        `Returns Loopback filter with relatives from ${message} filtered
        LoopbacCache or BioPortal in INQ clause`,
        () => {
          it(`${message}`, done => {
            const mock = sandbox
              .stub(techniqueCache, expected === 'flat' ? expected : 'andOr')
              .resolves();
            techniqueCache
              .buildFilter(args)
              .then(() => {
                expect(mock.callCount).to.be.eql(1);
                done();
              })
              .catch(done);
          });
        },
      );
    });
  });

  describe('buildTechniques', () => {
    context('Builds the items from filtered LoopbacCache or BioPortal', () => {
      it('Array of objects from filtered LoopbacCache or BioPortal', done => {
        sandbox.stub(techniqueCache.techniqueGetter, 'build');
        techniqueCache.techniqueGetter.relatives = {1: new Set(['1', '2'])};
        techniqueCache.techniqueGetter.collection = [
          {
            pid: '1',
            prefLabel: 'a',
            synonym: ['A'],
            parents: ['b'],
            children: ['2'],
          },
        ];
        const expected = {
          pid: '1',
          name: 'a',
          synonym: ['A'],
          relatives: ['1', '2'],
          createdAt: 10,
          children: ['2'],
          parents: ['b'],
        };
        sandbox.stub(Date, 'now').returns(10);
        sandbox.stub(techniqueCache.cache, 'get').resolves([]);
        const mock = sandbox.stub(techniqueCache.cache, 'set');
        techniqueCache
          .buildTechniques()
          .then(() => {
            expect(
              (mock.args[0][1] as Generator<Technique>).next().value,
            ).to.be.eql(expected);
            done();
          })
          .catch(done);
      });
    });
  });
});

describe('selectTechniqueBuilder', () => {
  const tests = [
    {
      args: {technique: {cache: {}}},
      expected: OntologyTechniquesLoopbackCacheBuilder,
      message: 'simple filter',
    },
    {
      args: {},
      expected: FreeFormTechniques,
      message: 'one level filter unchanged',
    },
  ];
  tests.forEach(({args, expected, message}) => {
    it(`${message}`, async () => {
      const mock = sandbox.createStubInstance(TechniqueRepository);
      const dm = Promise.resolve(mock);
      const tech = await selectTechniqueBuilder(args, dm);
      expect(tech).to.be.instanceOf(expected);
    });
  });
});

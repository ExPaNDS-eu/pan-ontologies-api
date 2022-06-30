import {expect} from 'chai';
import {createSandbox} from 'sinon';
import superagent = require('superagent');
import * as techniqueGetter from '../../misc/technique-getter';
import {xmlContent, querySelectorXml} from '../fixtures/MockStubs';
const sandbox = createSandbox();

afterEach(done => {
  sandbox.restore();
  done();
});

describe('BioPortalTechniques', () => {
  const BioPortalTechniques = new techniqueGetter.BioPortalTechniques({
    url: 'http://aUrl.com',
    apiKey: 'aKey',
  });
  describe('composeURL', () => {
    context('Sets the url, the queryParams and the headers to use', () => {
      it('Sets the url, the queryParams and the headers to use', done => {
        BioPortalTechniques.composeURL();
        /* eslint-disable no-unused-expressions */
        expect(typeof BioPortalTechniques.url === 'string').to.true;
        /* eslint-disable no-unused-expressions */
        expect(BioPortalTechniques.headers).to.not.be.null;
        /* eslint-disable no-unused-expressions */
        expect(BioPortalTechniques.queryParams).to.not.be.null;
        done();
      });
    });
  });

  const nodes = {
    prefLabel: 'a bb     cc d',
    '@id': 'a',
    synonym: ['b', 'c  d    e'],
    children: [{'@id': '1'}, {'@id': '2'}],
    parents: [
      {prefLabel: null, '@id': '3'},
      {prefLabel: 'd', '@id': '4'},
    ],
  };

  describe('prefLabel', () => {
    context('Returns the item with extra spaces removed', () => {
      it('Item with extra spaces removed', done => {
        const expected = 'a bb cc d';
        expect(BioPortalTechniques.prefLabel(nodes)).to.be.eql(expected);
        done();
      });
    });
  });

  describe('synonym', () => {
    context('Returns the item removing extra spaces', () => {
      it('Item removing extra spaces', done => {
        const expected = ['b', 'c d e'];
        expect(BioPortalTechniques.synonym(nodes)).to.be.eql(expected);
        done();
      });
    });
  });

  describe('children', () => {
    context('Returns the item unpacking the array of objects', () => {
      it('Item unpacking the array of objects', done => {
        const expected = ['1', '2'];
        expect(BioPortalTechniques.children(nodes)).to.be.eql(expected);
        done();
      });
    });
  });

  describe('parents', () => {
    context('Returns the item unpacking the array of objects', () => {
      it('Item unpacking the array of objects', done => {
        const expected = ['3', '4'];
        expect(BioPortalTechniques.parents(nodes)).to.be.eql(expected);
        done();
      });
    });
  });

  describe('processCollection', () => {
    context('Returns a generator with processed lines', () => {
      it('Generator with  processed lines', done => {
        const expected = [
          {
            prefLabel: 'a bb cc d',
            pid: 'a',
            synonym: ['b', 'c d e'],
            children: ['1', '2'],
            parents: ['3', '4'],
          },
        ];
        const results = [];
        for (const result of BioPortalTechniques.processCollection([nodes]))
          results.push(result);
        expect(results).to.be.eql(expected);
        expect(BioPortalTechniques.collection).to.be.eql(expected);
        done();
      });
    });
  });

  describe('buildNodes', () => {
    context(
      `Creates an object where firstKey is the type of object and as value a
      second object with an id and the value`,
      () => {
        it(`Object where firstKey is the type of object and as value a second
        object with an id and the value`, done => {
          const args = [
            {
              pid: '1',
              children: [],
              parents: ['3', '4'],
              synonym: [],
              prefLabel: 'a',
            },
            {
              pid: '2',
              children: ['1', '2'],
              parents: [],
              synonym: [],
              prefLabel: 'b',
            },
          ];
          const expected = {
            parents: {'1': ['3', '4'], '2': []},
            leaves: ['1'],
            children: {'2': ['1', '2'], '1': []},
          };
          function* f(arr: techniqueGetter.TechniqueCollection[]) {
            for (const a of arr) {
              yield a;
            }
          }
          expect(BioPortalTechniques.buildNodes(f(args))).to.be.eql(expected);
          done();
        });
      },
    );
  });

  describe('getCollection', () => {
    context(
      'Concats together the responses of BioPortal from different pages',
      () => {
        it('Responses of BioPortal from different pages', async () => {
          const stubReturn = {
            query: () => {
              return {
                set: () => {
                  return new Promise(resolve => {
                    resolve({text: '{"collection":[1,2],"pageCount":4}'});
                  });
                },
              };
            },
          };
          const mock = sandbox.stub(superagent, 'get');
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          mock.returns(stubReturn as any);
          await BioPortalTechniques.getCollection();
          expect(mock.callCount).to.be.eql(4);
        });
      },
    );
  });

  describe('build', () => {
    context(
      `Builds and sets a graph with key the id of the BioPortal item and value
      the relatives (ancestor or descendants)`,
      () => {
        it(`Sets a graph with key the id of the BioPortal item and value the
        relatives (ancestor or descendants)`, done => {
          const args = [
            {
              prefLabel: ' a ',
              '@id': '1',
              synonym: [' A '],
              children: [{'@id': '2'}],
              parents: [
                {prefLabel: null, '@id': '1'},
                {prefLabel: null, '@id': '1'},
              ],
            },
            {
              prefLabel: 'b',
              '@id': '2',
              synonym: [],
              children: [],
              parents: [{prefLabel: 'a', '@id': '1'}],
            },
          ];
          const expected = {
            relatives: {'1': new Set(['1', '2']), '2': new Set(['2'])},
            firstDescendants: {'1': ['2'], '2': []},
            collection: [
              {
                prefLabel: 'a',
                pid: '1',
                synonym: ['A'],
                children: ['2'],
                parents: [],
              },
              {
                prefLabel: 'b',
                pid: '2',
                synonym: [],
                children: [],
                parents: ['1'],
              },
            ],
          };
          sandbox.stub(BioPortalTechniques, 'getCollection').resolves(args);
          BioPortalTechniques.build()
            .then(data => {
              expect(data.collection).to.be.eql(expected.collection);
              expect(data.relatives).to.be.eql(expected.relatives);
              done();
            })
            .catch(done);
        });
      },
    );
  });

  describe('leavesNode', () => {
    context('Store leaves and children', () => {
      it('Store leaves and children', done => {
        const node = {
          pid: '1',
          prefLabel: 'a',
          synonym: ['A'],
          children: ['2'],
          parents: [],
        };
        const o = {leaves: [], parents: {}, children: {}};
        const expected = {children: {'1': ['2']}, leaves: [], parents: {}};
        BioPortalTechniques.leavesNode(node, o);
        expect(o).to.be.eql(expected);
        done();
      });
    });
  });
});

describe('GitHubOwlTechnique', () => {
  let GitHubOwlTechnique: techniqueGetter.GitHubOwlTechnique;
  beforeEach(() => {
    GitHubOwlTechnique = new techniqueGetter.GitHubOwlTechnique({
      url: 'http://aurl',
      file: 'aFile',
      commit: 'aCommit',
    });
  });

  describe('composeURL', () => {
    const expectedURL = 'http://aurl/aCommit/aFile';
    const tests = [
      {
        args: new techniqueGetter.GitHubOwlTechnique({
          url: 'http://aurl',
          file: 'aFile',
          commit: 'aCommit',
        }),
        expected: expectedURL,
        message: 'without /',
      },
      {
        args: new techniqueGetter.GitHubOwlTechnique({
          url: 'http://aurl/',
          file: 'aFile',
          commit: 'aCommit',
        }),
        expected: expectedURL,
        message: 'with /',
      },
    ];
    tests.forEach(({args, expected, message}) => {
      context(`Composes an url based on the config file ${message}`, () => {
        it(`${message}`, done => {
          args.composeURL();
          expect(args.url.toString()).to.be.eql(expected);
          done();
        });
      });
    });
  });

  describe('getCollection', () => {
    it('checks the length of the returned collection', async () => {
      sandbox
        .stub(superagent, 'get')
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        .returns({text: xmlContent} as any);
      const data = await GitHubOwlTechnique.getCollection();
      expect(data.length).to.be.eql(3);
    });
  });

  describe('pid', () => {
    it('checks the pid from the xml queried file', done => {
      const item = querySelectorXml[0];
      expect(GitHubOwlTechnique.pid(item)).to.be.eql('class1');
      done();
    });
  });

  describe('prefLabel', () => {
    const tests = [
      {
        args: querySelectorXml[0],
        expected: 'label1',
        message: 'from label',
      },
      {
        args: querySelectorXml[1],
        expected: 'label2',
        message: 'from about split',
      },
    ];
    tests.forEach(({args, expected, message}) => {
      it(`${message}`, done => {
        expect(GitHubOwlTechnique.prefLabel(args)).to.be.eql(expected);
        done();
      });
    });
  });

  describe('synonym', () => {
    it('checks the synonym from the xml queried file', done => {
      const item = querySelectorXml[1];
      expect(GitHubOwlTechnique.synonym(item)).to.be.eql([
        'synonym1',
        'synonym2',
      ]);
      done();
    });
  });

  describe('parents', () => {
    it('checks the synonym from the xml queried file', done => {
      const item = querySelectorXml[2];
      const parents = ['class1', 'http://class2/label2'];
      expect(GitHubOwlTechnique.parents(item)).to.be.eql(parents);
      expect(GitHubOwlTechnique.parentsSet).to.be.eql(new Set(parents));
      done();
    });
  });

  describe('filterLeaves', () => {
    it('Returns the pids of the leaves and appends to an array', done => {
      GitHubOwlTechnique.collection = [
        {pid: '1', parents: [], synonym: [], prefLabel: 'a', children: []},
        {pid: '2', parents: [], synonym: [], prefLabel: 'b', children: []},
        {pid: '3', parents: [], synonym: [], prefLabel: 'c', children: []},
      ];
      GitHubOwlTechnique.parentsSet = new Set(['1', '2']);
      expect(
        GitHubOwlTechnique.filterLeaves({
          children: {'1': ['2']},
          leaves: [],
          parents: {},
        }),
      ).to.be.eql(['3']);
      expect(GitHubOwlTechnique.collection[0].children).to.be.eql(['2']);
      done();
    });
  });

  describe('build', () => {
    it('builds nodes from the xml file', done => {
      const expected = {
        collection: [
          {
            pid: 'class1',
            prefLabel: 'label1',
            parents: [],
            synonym: [],
            children: ['http://class2/label2', 'class3'],
          },
          {
            pid: 'http://class2/label2',
            prefLabel: 'label2',
            parents: ['class1'],
            synonym: ['synonym1', 'synonym2'],
            children: ['class3'],
          },
          {
            pid: 'class3',
            prefLabel: 'label3',
            parents: ['class1', 'http://class2/label2'],
            synonym: [],
            children: [],
          },
        ],
        relatives: {
          class1: new Set(['class1', 'http://class2/label2', 'class3']),
          'http://class2/label2': new Set(['http://class2/label2', 'class3']),
          class3: new Set(['class3']),
        },
      };
      sandbox
        .stub(GitHubOwlTechnique, 'getCollection')
        .resolves(querySelectorXml);
      GitHubOwlTechnique.build()
        .then(data => {
          expect(data.collection).to.be.eql(expected.collection);
          expect(data.relatives).to.be.eql(expected.relatives);
          done();
        })
        .catch(done);
    });
  });

  describe('leavesNode', () => {
    context('Store leaves and children', () => {
      it('Store leaves and children', done => {
        const node = {
          pid: '3',
          prefLabel: 'a',
          synonym: ['A'],
          parents: ['1'],
          children: [],
        };
        const o = {leaves: [], parents: {}, children: {'1': ['2']}};
        const expected = {children: {'1': ['2', '3']}, leaves: [], parents: {}};
        GitHubOwlTechnique.leavesNode(node, o);
        expect(o).to.be.eql(expected);
        done();
      });
    });
  });
});

import {Entity, Filter} from '@loopback/repository';
import {expect} from 'chai';
import {createSandbox} from 'sinon';

import {LoopbackCache} from '../../misc/cache';
import {TechniqueRepository} from '../../repositories';

const sandbox = createSandbox();

afterEach(done => {
  sandbox.restore();
  done();
});

describe('LoopbackCache', () => {
  describe('set', () => {
    const tests = [
      {
        args: {input: [{name: 'a', pid: 1}], ttl: 100},
        expected: {name: 'a', pid: 1, ttl: 100},
        message: 'array',
      },
      {
        args: {input: {name: 'a', pid: 1}, ttl: 100},
        expected: {name: 'a', pid: 1, ttl: 100},
        message: 'object',
      },
      {
        args: {
          input: (function* gen(input) {
            yield input;
          })({name: 'b', pid: 2, createdAt: 100}),
          ttl: 0,
        },
        expected: {name: 'b', pid: 2, ttl: 0, createdAt: 100},
        message: 'generator',
      },
    ];
    tests.forEach(({args, expected, message}) => {
      context(`Stores the ${message} in the loopback datasource`, () => {
        it(`${message}`, done => {
          const mock = sandbox.createStubInstance(TechniqueRepository);
          const createStub = mock.create as sinon.SinonStub;
          createStub.resolves(expected);
          const cache = new LoopbackCache(
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            {sttl: 10, model: mock as any},
          );
          cache
            .set('pid', args.input, args.ttl)
            .then(() => {
              /* eslint-disable no-unused-expressions */
              expect(createStub.calledWith(expected)).to.be.true;
              done();
            })
            .catch(done);
        });
      });
    });

    it('test already existing', async () => {
      const args = {input: {name: 'a', pid: 1}, ttl: 100};
      const expected = {name: 'a', pid: 1, ttl: 100};
      const mock = sandbox.createStubInstance(TechniqueRepository);
      const existsStub = mock.exists as sinon.SinonStub;
      existsStub.resolves(true);
      const replaceStub = mock.replaceById as sinon.SinonStub;
      const cache = new LoopbackCache(
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        {sttl: 10, model: mock as any},
      );
      await cache.set('pid', args.input, args.ttl);
      expect(replaceStub.calledWith(args.input.pid, expected)).to.be.true;
    });
  });

  describe('get', () => {
    const tests = [
      {
        args: {where: {name: 'a'}},
        expected: [{name: 'a', pid: '1', ttl: 100, createdAt: 10}],
        message: 'non empty',
      },
      {
        args: {where: {name: 'c'}},
        expected: [],
        message: 'empty',
      },
      {
        args: {where: {name: 'b'}},
        expected: 'deleteAll',
        message: 'expired',
      },
    ];
    tests.forEach(({args, expected, message}) => {
      context(`${message} cache due to filter`, () => {
        it(`${message}`, done => {
          const mock = sandbox.createStubInstance(TechniqueRepository);
          const findStub = mock.find as sinon.SinonStub;
          sandbox.stub(Date, 'now').returns(10);
          const cache = new LoopbackCache(
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            {sttl: 10, model: mock as any},
          );
          if (expected === 'deleteAll') {
            findStub.returns([{name: 'b', pid: 2, createdAt: 0, ttl: 0}]);
            cache
              .get(args as Filter<Entity>)
              .then(() => {
                expect(mock[expected].calledWith(args.where)).to.be.true;
                done();
              })
              .catch(done);
          } else if (expected.length > 0) {
            findStub.resolves(expected);
            cache
              .get(args as Filter<Entity>)
              .then(data => {
                expect(data[0]).to.be.eql(expected[0]);
                done();
              })
              .catch(done);
          } else {
            findStub.resolves(expected);
            cache
              .get(args as Filter<Entity>)
              .then(data => {
                expect(data).to.be.eql(expected);
                done();
              })
              .catch(done);
          }
        });
      });
    });
  });
});

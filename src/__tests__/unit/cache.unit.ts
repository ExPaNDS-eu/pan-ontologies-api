import {expect} from "chai"
import {createSandbox} from "sinon"

import { LoopbackCache } from "../../misc/cache";

const sandbox = createSandbox();

afterEach((done) => {
  sandbox.restore();
  done();
});

class modelMock {
  create(data: any) {
    return data
  }

  find(data: any){
    return data
  }

  deleteAll(data: any) {}

}

describe("LoopbackCache", () => {
  describe("set", () => {
    const tests = [
      {
        args: { input: [{ name: "a", pid: 1 }], ttl: 100 },
        expected: { name: "a", pid: 1, ttl: 100 },
        message: "array"
      },
      {
        args: { input: { name: "a", pid: 1 }, ttl: 100 },
        expected: { name: "a", pid: 1, ttl: 100 },
        message: "object"
      },
      {
        args: {
          input: function* gen(input) { yield input; }(
            { name: "b", pid: 2, createdAt: 100 }
          ),
          ttl: 0
        },
        expected: { name: "b", pid: 2, ttl: 0, createdAt: 100 },
        message: "generator"
      }
    ];
    tests.forEach(({ args, expected, message }) => {
      context(
        `Stores the ${message} in the loopback datasource`,
        () => {
          it(`${message}`,
            (done) => {
              const mock = sandbox.stub(new modelMock())
              mock.create.returns(expected)
              const cache = new LoopbackCache(
                { sttl: 10, model: mock as any}
              );
              cache.set("pid", args.input, args.ttl).then(() => {
                expect(mock.create.calledWith(expected)).to.be.true;
              });
              done();
            });
        }
      );
    });
  });

  describe("get", () => {
    const tests = [
      {
        args: { where: { name: "a" } },
        expected: [{ name: "a", pid: "1", ttl: 100, createdAt: 10 }],
        message: "non empty"
      },
      {
        args: { where: { name: "c" } },
        expected: [],
        message: "empty"
      },
      {
        args: { where: { name: "b" } },
        expected: "deleteAll",
        message: "expired"
      }
    ];
    tests.forEach(({ args, expected, message }) => {
      context(
        `${message} cache due to filter`,
        () => {
          it(`${message}`,
            (done) => {
              const mock = sandbox.stub(new modelMock())
              sandbox.stub(Date, "now").returns(10);
              const cache = new LoopbackCache(
                { sttl: 10, model: mock as any}
              );
              if (expected === "deleteAll") {
                mock.find.returns([{ name: "b", pid: 2, createdAt: 0, ttl: 0 }]);
                // const mock = sandbox.spy(app.models[cache.collection],
                //   expected);
                cache.get(args as any).then(() => expect(
                  mock[expected].calledWith(args.where)).to.be.true);
              } else if (expected.length > 0) {
                mock.find.returns(expected);
                cache.get(args as any).then(data =>
                  expect(data[0]).to.be.eql(expected[0]));
              } else {
                mock.find.returns(expected);
                cache.get(args as any).then(data =>
                  expect(data).to.be.eql(expected));
              }
              done();
            });
        }
      );
    });
  });

});

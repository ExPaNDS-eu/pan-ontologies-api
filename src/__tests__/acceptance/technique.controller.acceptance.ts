import {Client, expect} from '@loopback/testlab';
import {PanOntologiesApplication} from '../..';
import {setupApplication} from './test-helper';
import {expectedPanEspanded, panFilters} from '../fixtures/technique.testcases';
import {Technique} from '../../models';
import {givenEmptyDatabase} from '../helpers/database.helpers';
import * as config from '../../config';
import {createSandbox, SinonSandbox, SinonStub} from 'sinon';
import superagent = require('superagent');
import {BioPortalTechniques} from '../../misc/technique-getter';
import {bioportalResponse} from '../fixtures/responses/biobortal.response';
import {githubRespone} from '../fixtures/responses/github.response';

describe(`TechniqueController`, () => {
  let app: PanOntologiesApplication;
  let client: Client;
  let sandbox: SinonSandbox;
  let stubConfig: SinonStub;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
    sandbox = createSandbox();
    stubConfig = sandbox.stub(config, 'getConfig');
  });

  after(async () => {
    await app.stop();
  });
  const configs = ['BioPortalTechniques', 'GitHubOwlTechnique'];
  configs.forEach(conf => {
    describe(`${conf}`, () => {
      const cache = {class: 'LoopbackCache', ttl: 0};

      before('select config and response', () => {
        stubConfig.returns({technique: {class: conf, cache: cache}});
        if (conf === 'BioPortalTechniques')
          sandbox
            .stub(BioPortalTechniques.prototype, 'getCollection')
            .resolves(bioportalResponse);
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        else sandbox.stub(superagent, 'get').resolves(githubRespone as any);
      });

      beforeEach(givenEmptyDatabase);

      after(() => {
        sandbox.restore();
      });

      it('invokes GET /techniques', async () => {
        const res = await client.get('/techniques').expect(200);
        res.body.forEach((technique: Technique) => {
          expect(technique).to.have.property('pid');
          expect(technique).to.have.property('name');
          expect(technique).to.have.property('synonym');
          expect(technique).to.have.property('relatives');
          expect(technique).to.have.property('createdAt');
        });
      });

      it('invokes GET /techniques/count', async () => {
        const res = await client.get('/techniques/count').expect(200);
        expect(res.body).to.have.property('count');
        expect(res.body.count).to.be.eql(377);
      });

      panFilters.forEach((testCase, i) => {
        it(`invokes GET /pan-technique ${i}`, async () => {
          const whereFilter = JSON.stringify({where: testCase});
          const res = await client
            .get('/techniques/pan-ontology?filter=' + whereFilter)
            .expect(200);
          expect(res.body).to.eql(expectedPanEspanded[i]);
        });
      });
    });
  });
});

import {Client, expect} from '@loopback/testlab';
import {PanOntologiesApplication} from '../..';
import {setupApplication} from './test-helper';
import {
  expectedPanEspanded,
  panFilters,
  elementsNumber,
} from '../fixtures/technique.testcases';
import {Technique} from '../../models';
import {givenEmptyDatabase} from '../helpers/database.helpers';
import {createSandbox, SinonSandbox} from 'sinon';
import superagent = require('superagent');
import {BioPortalTechniques} from '../../misc/technique-getter';
import {bioportalResponse} from '../fixtures/responses/biobortal.response';
import {githubRespone} from '../fixtures/responses/github.response';
import {Condition} from '@loopback/repository';

const configs = ['BioPortalTechniques', 'GitHubOwlTechnique'];
configs.forEach(conf => {
  describe(`TechniqueController ${conf}`, () => {
    let app: PanOntologiesApplication;
    let client: Client;
    let sandbox: SinonSandbox;
    const cache = {class: 'LoopbackCache', sttl: 100};

    before('select config and response', async () => {
      sandbox = createSandbox();
      if (conf === 'BioPortalTechniques')
        sandbox
          .stub(BioPortalTechniques.prototype, 'getCollection')
          .resolves(bioportalResponse);
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      else sandbox.stub(superagent, 'get').resolves(githubRespone as any);
      ({app, client} = await setupApplication({
        technique: {class: conf, cache: cache},
      }));
    });

    beforeEach(givenEmptyDatabase);

    after(async () => {
      sandbox.restore();
      await app.stop();
    });

    it('invokes GET /techniques', async () => {
      const res = await client.get('/techniques').expect(200);
      res.body.forEach((technique: Technique) => {
        expect(technique).to.have.property('pid');
        expect(technique).to.have.property('name');
        expect(technique).to.have.property('synonym');
        expect(technique).to.have.property('relatives');
        expect(technique).to.have.property('children');
        expect(technique).to.have.property('createdAt');
      });
    });

    it('invokes GET /techniques/{id}', async () => {
      const pid = 'http://purl.org/pan-science/PaNET/PaNET01200';
      const pidEncoded = encodeURIComponent(pid);
      const res = await client.get(`/techniques/${pidEncoded}`).expect(200);
      expect(res.body.pid).to.be.eql(pid);
      expect(res.body.children).to.be.eql([]);
      expect(res.body.name).to.be.eql('x-ray emission spectroscopy');
      expect(res.body.synonym).to.be.eql(['XES']);
      expect(res.body.relatives).to.be.eql([pid]);
    });

    it('invokes GET /techniques/count', async () => {
      const res = await client.get('/techniques/count').expect(200);
      expect(res.body).to.have.property('count');
      expect(res.body.count).to.be.eql(
        elementsNumber[conf as keyof typeof elementsNumber],
      );
    });

    panFilters.forEach((testCase, i) => {
      it(`invokes GET /pan-technique ${i}`, async () => {
        const whereFilter = JSON.stringify(testCase);
        const res = await client
          .get('/techniques/pan-ontology?where=' + whereFilter)
          .expect(200);

        const check = (
          left: Condition<Technique>,
          right: Condition<Technique>,
        ) => {
          expect(Object.keys(left.pid)).to.eql(Object.keys(right.pid));
          expect(Object.keys(left.pid).length).to.eql(1);
          const condition = Object.keys(right.pid)[0];
          expect(left.pid[condition].sort()).to.eql(
            right.pid[condition].sort(),
          );
        };

        const expected: Condition<Technique> = expectedPanEspanded[i];
        if ('and' in expected || 'or' in expected) {
          expect(Object.keys(res.body).length).to.eql(1);
          expect(Object.keys(res.body)).to.eql(Object.keys(expected));
          const k = Object.keys(expected)[0];
          res.body[k].map((element: Condition<Technique>[], j: number) => {
            const expectedElement = expected[k][j];
            check(element, expectedElement);
          });
        } else check(res.body, expected);
        expect(res.body).to.eql(expectedPanEspanded[i]);
      });
    });
  });
});

import {PanOntologiesApplication} from '../..';
import {
  createRestAppClient,
  givenHttpServerConfig,
  Client,
} from '@loopback/testlab';
import {testdb} from '../fixtures/datasources/testdb.datasource';
import {CacheConfig, Config, GenericGetter} from '../../config';

export async function setupApplication(
  config?: Config<CacheConfig, GenericGetter>,
): Promise<AppWithClient> {
  const restConfig = givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    // port: +process.env.PORT,
  });

  const app = new PanOntologiesApplication({
    rest: restConfig,
    ...config,
  });

  app.dataSource(testdb);
  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export interface AppWithClient {
  app: PanOntologiesApplication;
  client: Client;
}

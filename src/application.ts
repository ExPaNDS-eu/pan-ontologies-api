import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import {TechniqueRepository} from './repositories';
import {
  OntologyTechniquesLoopbackCacheBuilder,
  FreeFormTechniques,
} from './misc';

export {ApplicationConfig};

export class PanOntologiesApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
  async boot(): Promise<void> {
    await super.boot();
    let technique: OntologyTechniquesLoopbackCacheBuilder | FreeFormTechniques;
    if ('technique' in this.options) {
      this.options.technique.cache.model = await this.get<TechniqueRepository>(
        'repositories.TechniqueRepository',
      );
      technique = new OntologyTechniquesLoopbackCacheBuilder(
        this.options.technique,
      );
    } else technique = new FreeFormTechniques();
    this.bind('technique').to(technique);
  }
}

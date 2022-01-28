import {Entity} from '@loopback/repository';

export type Config<T, C> = C extends BioPortalGetter
  ? {
      technique: BioPortalGetter & {cache: T} & {class: string};
    }
  : {technique: GitHubGetter & {cache: T} & {class: string}};

export type BioPortalGetter = {
  url: string;
  apiKey: string;
};

export type GitHubGetter = {
  url?: string;
  commit?: string;
  file?: string;
};

export type GenericGetter = GitHubGetter | BioPortalGetter;

export type CacheConfig = {
  class: string;
  sttl: number;
};

export type CacheConstructor = {
  model: Entity;
  sttl: number;
};

export type CacheInit = CacheConfig & {
  model: Entity;
};

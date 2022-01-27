import { Entity } from "@loopback/repository";

export type config<T, C> = C extends BioPortalGetter? {
    technique: BioPortalGetter & {cache: T} & 
    {class: string}
}: {technique: GitHubGetter & {cache: T} & {class: string}}

export type BioPortalGetter = {
    url: string,
    apiKey: string,
}

export type GitHubGetter = {
    url?: string,
    commit?: string,
    file?: string,
}

export type GenericGetter = GitHubGetter | BioPortalGetter

export type cacheConfig = {
    class: string,
    sttl: number
}

export type cacheConstructor = {
    model: Entity,
    sttl: number
}

export type cacheInit = cacheConfig & {
    model: Entity
}

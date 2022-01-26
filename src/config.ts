import { Entity } from "@loopback/repository";

export type config<T, C> = C extends BioPortalGetter? {
    technique: BioPortalGetter & {cache: T}
}: {technique: GitHubGetter & {cache: T}}

export type BioPortalGetter = {
    class: string,
    url: string,
    apiKey: string,
}

export type GitHubGetter = {
    class: string,
    url?: string,
    commit?: string,
    file?: string,
}

export type GenericGetter = GitHubGetter | BioPortalGetter

export type cacheConfig = {
    class: string,
    sttl: number
}

export type cacheInit = cacheConfig & {
    model: Entity
}

export interface Requirements {
    modules: [string],
    collections: [string]
}

export interface IAPI {
    modules: any,
    collections: any,
    error: any
}

export interface IGameConfig {
    name: string;
    short_name: string;
    color: string;
    description: string;
    mongodb_password: string;
    frontend: string;
    backend: string;
    author: string;
}
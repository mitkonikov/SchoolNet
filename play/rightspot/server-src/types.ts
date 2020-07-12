import { Collection } from "mongodb"

// This should be a fixed API type
// Global reference at `cleaner` app
export type APIType = {
    modules: any,
    collections: any,
    error: any
}

// These are all the database collections you have access to
export type Collections = {
    active: Collection,
    archive: Collection
}
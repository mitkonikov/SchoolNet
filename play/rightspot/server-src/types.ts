import { Collection } from "mongodb"

// This should be a fixed API type
// Global reference at `cleaner` app
export interface IAPI {
    modules: any,
    collections: any,
    error: any
}

// These are all the database collections you have access to
export interface Collections {
    active: Collection,
    archive: Collection
}
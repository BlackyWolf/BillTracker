import { PUBLIC_DATABASE } from '$env/static/public';
import type { IDBPDatabase } from 'idb';
import { openDB } from 'idb';

let db: IDBPDatabase;

const remoteCouch = false;

export async function getDb() {
    if (!db) {
        db = await openDB(PUBLIC_DATABASE)
    }

    return db;
}

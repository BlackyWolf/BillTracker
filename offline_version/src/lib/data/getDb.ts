import { PUBLIC_DATABASE } from '$env/static/public';
import type { IDBPDatabase } from 'idb';
import { openDB } from 'idb';
import { createDatabase } from './createDatabase';
import type { BillsTrackerDb } from './db.schema';

let db: IDBPDatabase<BillsTrackerDb>;

const remoteCouch = false;

export async function getDb() {
    if (!db) {
        db = await openDB<BillsTrackerDb>(PUBLIC_DATABASE, 1, {
            upgrade: createDatabase
        });
    }

    return db;
}

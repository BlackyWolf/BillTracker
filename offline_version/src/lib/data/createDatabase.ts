import type { IDBPDatabase } from 'idb';
import type { BillsTrackerDb } from './db.schema';

function createBillsStore(db: IDBPDatabase<BillsTrackerDb>) {
    const store = db.createObjectStore('bills', {
        keyPath: 'id',
        autoIncrement: true
    });

    store.createIndex('amount', 'amount');
    store.createIndex('dateDue', 'due');
    store.createIndex('datePaid', 'paidOn');
    store.createIndex('description', 'description');
}

function createTemplatesStore(db: IDBPDatabase<BillsTrackerDb>) {
    const store = db.createObjectStore('templates', {
        keyPath: 'id',
        autoIncrement: true
    });

    store.createIndex('amount', 'amount');
    store.createIndex('description', 'description');
    store.createIndex('frequency', 'frequency');
}

export function createDatabase(db: IDBPDatabase<BillsTrackerDb>) {
    createBillsStore(db);
    createTemplatesStore(db);
}

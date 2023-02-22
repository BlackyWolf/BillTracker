import { billsCollection } from '../collection-names';
import { getDb } from '../getDb';

export async function getBills() {
    const db = await getDb();

    return await db.getAll(billsCollection);
}

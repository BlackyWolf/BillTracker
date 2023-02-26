import { billsCollection } from '$lib/data/collection-names';
import { getDb } from '$lib/data/getDb';

export async function getBills() {
    const db = await getDb();

    return await db.getAll(billsCollection);
}

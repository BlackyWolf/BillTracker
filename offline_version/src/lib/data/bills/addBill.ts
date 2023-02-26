import { billsCollection } from '$lib/data/collection-names';
import { getDb } from '$lib/data/getDb';
import type { Bill } from '$lib/data/bills/Bill.model';

export async function addBill(bill: Bill) {
    const db = await getDb();

    return await db.add(billsCollection, bill);
}

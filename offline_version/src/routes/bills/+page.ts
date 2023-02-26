import { getBills } from '$lib/data/bills/getBills';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    return {
        bills: await getBills()
    };
};

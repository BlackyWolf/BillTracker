import type { DBSchema } from 'idb';
import type { Bill } from './bills/Bill.model';
import type { Template } from './templates/Template.model';

export interface BillsTrackerDb extends DBSchema {
    bills: {
        indexes: {
            amount: number;
            dateDue: Date;
            datePaid: Date;
            description: string;
        };
        key: number;
        value: Bill;
    };
    templates: {
        indexes: {
            amount: number;
            description: string;
            frequency: string;
        };
        key: number;
        value: Template;
    };
}

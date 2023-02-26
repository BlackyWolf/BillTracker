export interface Bill {
    id: number;
    amount: number;
    cancelled: boolean;
    description: string;
    due: Date;
    paid: boolean;
    paidOn?: Date;
}

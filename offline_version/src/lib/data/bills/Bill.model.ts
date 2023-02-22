interface Frequency {
    amount: number;
    period: string;
}

export interface Bill {
    id: number;
    cancelled: boolean;
    description: string;
    due: Date;
    frequency?: Frequency;
    paid: boolean;
    title: string;
}

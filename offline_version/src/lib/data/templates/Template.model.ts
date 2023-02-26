interface Frequency {
    quantity: number;
    type: 'days' | 'weeks' | 'months' | 'years';
}

export interface Template {
    id: number;
    amount: number;
    description: string;
    enabled: boolean;
    frequency: Frequency;
}

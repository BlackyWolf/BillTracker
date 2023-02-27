interface Frequency {

}

interface Annually {
    day: number;
    month: number;
}

interface Quarterly {
    day: number;
    startingMonth: number;
}

interface BiWeekly {
    day: number;
}

interface Monthly {
    day: number;
    endOfMonth: boolean;
    startingMonth: number;
}

interface Ticker {

}

export interface Template {
    id: number;
    amount: number;
    description: string;
    enabled: boolean;
    frequencies: Frequency;
}

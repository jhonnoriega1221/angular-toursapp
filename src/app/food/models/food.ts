export interface Price {
    name:   string;
    amount: number;
}

export interface Food {
    _id:    string;
    name:   string;
    imgURL: string;
    prices: Price[];
}
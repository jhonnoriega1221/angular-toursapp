export interface Product {
    _id:      string;
    name:     string;
    imageURL: string;
    prices:   Price[];
}

export interface Price {
    name:  string;
    price: number;
}

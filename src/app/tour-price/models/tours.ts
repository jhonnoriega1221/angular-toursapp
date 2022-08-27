export interface Tours {
    _id:         string;
    name:        string;
    type:        string;
    description: string;
    price:       number;
    duration:    Duration;
    places:      Place[];
    route_id:    string;
    imgURL: string;
}

export interface Duration {
    start:  number;
    finish: number;
    time:   string;
}

export interface Place {
    name:        string;
    imageURL:    string;
    coordenates: Coordenates;
}

export interface Coordenates {
    lat: string;
    lon: string;
}
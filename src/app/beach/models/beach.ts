export interface Beach {
    id:       number;
    name:     string;
    imageUrl: string;
    hours:    string;
    location: Location;
    distance: number;
    services: Services;
}

export interface Location {
    lat:    number;
    lng:    number;
    imgUrl: string;
    name: string;
}

export interface Services {
    chairs:   number;
    massage:  number;
    braids:   number;
    jetsky:   number;
    worm:     number;
    boatDish: number;
    tent:     number;
}

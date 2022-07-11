export interface Tours {
    id:            number;
    name:          string;
    type:          string;
    places:        Place[];
    routePictureUrl: string;
    price:         number;
    description:   string;
}

export interface Place {
    name:          string;
    pictureUrl:    string;
    lat:           number;
    lng:           number;
}

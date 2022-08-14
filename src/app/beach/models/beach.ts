export interface Beach {
    _id:      string;
    name:     string;
    imgURL:   string;
    schedule: Schedule[];
    services: Service[];
    location: Location[];
}

export interface Location {
    lat: number;
    lon: number;
}

export interface Schedule {
    open_hour:  string;
    close_hour: string;
}

export interface Service {
    name:  string;
    price: number;
    desc:  string;
}

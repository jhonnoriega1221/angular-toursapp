export interface Route {
    type:     string;
    features: Feature[];
}

export interface Feature {
    type:       string;
    properties: Properties;
    geometry:   Geometry;
}

export interface Geometry {
    type:        string;
    coordinates: Array<number[]>;
}

export interface Properties {
    stroke:           string;
    "stroke-width":   number;
    "stroke-opacity": number;
}

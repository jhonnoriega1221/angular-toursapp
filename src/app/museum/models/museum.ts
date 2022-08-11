interface Price {
	people: string;
	amount: number;
}

interface Schedule {
	day: string;
	closed: boolean;
	time_from: string;
	time_to: string;
}

interface Location {
	lat: string;
	lon: string;
}

export interface Museum {
	_id: string;
	name: string;
	imgURL: string;
	description: string;
	prices: Price[];
	schedule: Schedule[];
	location: Location[];
}
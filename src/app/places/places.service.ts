import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
	providedIn: 'root',
})
export class PlacesService {
	private _places: Place[] = [
		new Place(
			'p1',
			'Manhattan',
			'In the heart of New York city.',
			'https://cdn.traveltripper.io/site-assets/192_680_16182/media/2018-05-27-000645/mts-neighborhood-guide-midtown-manhattan.png',
			149.99
		),
		new Place(
			'p2',
			'Kochi',
			'South India.',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Kochi-725765.jpg/350px-Kochi-725765.jpg',
			49.99
		),
		new Place(
			'p3',
			'Paris',
			'The best place in the world.',
			'https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg?imwidth=1400',
			399.89
		),
	];

	get places() {
		return [...this._places];
	}

	getPlace(id: string) {
		return { ...this._places.find(p => p.id === id) };
	}

	constructor() {}
}

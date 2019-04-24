import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
	selector: 'app-discover',
	templateUrl: './discover.page.html',
	styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
	loadedPlaces: Place[];
	listLoadedPlaces: Place[];
	constructor(private placeService: PlacesService, private menuCtrl: MenuController) {}

	ngOnInit() {
		this.loadedPlaces = this.placeService.places;
		this.listLoadedPlaces = this.loadedPlaces.slice(1);
	}

	onOpenMenu() {
		this.menuCtrl.toggle();
	}

	onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
		console.log(event.detail);
	}
}

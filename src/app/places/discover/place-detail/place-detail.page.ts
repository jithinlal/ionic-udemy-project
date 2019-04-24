import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
	selector: 'app-place-detail',
	templateUrl: './place-detail.page.html',
	styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
	place: Place;
	constructor(
		private route: ActivatedRoute,
		private navCtrl: NavController,
		private placeService: PlacesService,
		private modalCtrl: ModalController,
		private actionCtrl: ActionSheetController
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe(param => {
			if (!param.has('placeId')) {
				this.navCtrl.navigateBack('/places/tabs/discover');
			}
			this.place = this.placeService.getPlace(param.get('placeId'));
		});
	}
	onBookPlace() {
		// this.navCtrl.navigateBack('/places/tabs/discover');
		this.actionCtrl
			.create({
				header: 'Choose an action',
				buttons: [
					{
						text: 'Select Date',
						handler: () => {
							this.openBookingModal('select');
						},
					},
					{
						text: 'Random Date',
						handler: () => {
							this.openBookingModal('random');
						},
					},
					{
						text: 'Cancel',
						role: 'cancel',
					},
				],
			})
			.then(el => {
				el.present();
			});
	}

	openBookingModal(mode: 'select' | 'random') {
		this.modalCtrl
			.create({
				id: 'modal1',
				component: CreateBookingComponent,
				componentProps: { selectedPlace: this.place },
			})
			.then(el => {
				el.present();
				return el.onDidDismiss();
			})
			.then(res => {
				console.log(res.data, res.role);
				if (res.role === 'confirm') {
					console.log('BOOKED');
				}
			});
	}
}

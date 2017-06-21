import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-agenda',
  templateUrl: 'Agenda.html'
})
export class AgendaPage {
	
	public swipe: number = 0;
	
	swipeEvent(e) {
		this.swipe++
	}

	constructor(public navCtrl: NavController) {

	}

}

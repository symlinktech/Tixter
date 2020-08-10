import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  constructor(public router:Router,public activatedRoute:ActivatedRoute,public navCtrl:NavController) { }

  ngOnInit() {
  }
  navPop(){
  	this.navCtrl.pop();
  }

}

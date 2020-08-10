import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class EventListPage implements OnInit {

  constructor(public router:Router,public activatedRoute:ActivatedRoute,public navCtrl:NavController) { }

  ngOnInit() {
  }
  navPop(){
  	this.navCtrl.pop();
  }
  eventDetailPageNav(){
    this.navCtrl.navigateForward('event-details')
  }
}

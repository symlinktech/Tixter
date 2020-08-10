import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SearchFilterPage implements OnInit {

  constructor(public router:Router,public activatedRoute:ActivatedRoute,public navCtrl:NavController) { }

  ngOnInit() {
  }
  footerBtnNavigate(path){
  	this.navCtrl.navigateRoot(path)
  }
  eventPageNav(){
    this.navCtrl.navigateForward('event-list')
  }

}

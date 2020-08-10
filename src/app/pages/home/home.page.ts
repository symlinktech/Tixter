import { Component, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],  
  encapsulation:ViewEncapsulation.None
})
export class HomePage {
paymentAmount: string = '3.33';
  currency: string = 'INR';
  currencyIcon: string = '₹';
  constructor(public router:Router,public activatedRoute:ActivatedRoute, public navCtrl:NavController) {
  }

  footerBtnNavigate(path){
  	this.navCtrl.navigateRoot(path)
  }
}

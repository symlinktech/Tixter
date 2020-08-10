import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TicketsPage implements OnInit {

  constructor(public router:Router,public activatedRoute:ActivatedRoute, public navCtrl:NavController) { }

  ngOnInit() {
  }
  footerBtnNavigate(path){
  	this.navCtrl.navigateRoot(path)
  }

}

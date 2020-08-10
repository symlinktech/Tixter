import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FavouritesPage implements OnInit {

  constructor(public router:Router,public activatedRoute:ActivatedRoute, public navCtrl:NavController) { }

  ngOnInit() {
  }
  footerBtnNavigate(path){
  	this.navCtrl.navigateRoot(path)
  }

}

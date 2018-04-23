import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePage } from '../create/create';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    
  }
  goCre(){
    this.navCtrl.push(CreatePage);
   }
}

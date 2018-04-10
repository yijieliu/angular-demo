import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    

}
  doInfinite(infiniteScroll){
  console.log(infiniteScroll);
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
    var nav = '';
    var item = '';
  setTimeout(() => {
    loading.dismiss();
   
  }, 3000);
  loading.present();
   infiniteScroll.complete();  


  }
}
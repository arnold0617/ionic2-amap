import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SiteInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-site-info',
  templateUrl: 'site-info.html'
})
export class SiteInfoPage {
  title;
  longitude;
  latitude;
  status;
  description;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.longitude = this.navParams.get('longitude');
    this.latitude = this.navParams.get('latitude');

    this.title = "Beijing";
    this.status = "danger";
    this.description = "2 MSDP servers down!";
  }



}

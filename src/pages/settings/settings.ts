import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  state: string;
  city: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
  ) {

    this.storage.get('location').then( result => {
      if(result != null) {
        let location = JSON.parse(result);
        this.state = location.state;
        this.city = location.city;
      } else {
        this.state = 'TW';
        this.city = 'Taipei';
      }

    })
    
  }

  saveForm() {
     let location = {
       state: this.state,
       city: this.city,
     }
     this.storage.set('location', JSON.stringify(location));
     this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}

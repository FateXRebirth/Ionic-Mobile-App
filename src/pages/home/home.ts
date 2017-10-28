import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  location: {
    city: string,
    state: string,
  }

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage,
  ) {
    
  }

  ionViewWillEnter() {

    this.storage.get('location').then( result => {
      if(result != null) {
        this.location = JSON.parse(result);
      } else {
        this.location = {
          city: 'Taipei',
          state: 'TW'
        }
      }
      
      this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe(weather => {
        this.weather = weather.current_observation; 
      });

    })

    
    
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey = 'eacb12c1ede35178';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather(state, city) {
    return this.http.get(this.url + '/' + state + '/' + city + '.json').map(res => res.json());
  }

}

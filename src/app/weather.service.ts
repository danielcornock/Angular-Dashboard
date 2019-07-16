import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private proxy = 'https://cors-anywhere.herokuapp.com/'
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139';
  private longitude;
  private latitude;

  private amendedUrl: string;

  constructor(private http: HttpClient) { }



  getWeather(): Observable<any> {
    if (!navigator.geolocation) {
      console.log('Navigator not active');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = (position.coords.latitude);
        this.longitude = (position.coords.longitude);
        this.amendedUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&APPID=aaa479e6c8056b91e667e8745fe6942e`;
        console.log(this.amendedUrl);
      });
    }
    return this.http.get<any>(this.amendedUrl);
  }
}

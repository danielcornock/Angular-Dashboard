import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private proxy = 'https://cors-anywhere.herokuapp.com/'
  private apiUrl = 'https://api.darksky.net/forecast/5389175401cca0f21832cc7e70ee4da0/37.8267,-122.4233';
  private longitude;
  private latitude;

  private amendedUrl: string;

  constructor(private http: HttpClient) { }



  getWeather(): Observable<any> {
    if (!navigator.geolocation) {
      console.log('Navigator not active');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.amendedUrl = `${this.proxy}${this.apiUrl}${this.latitude},${this.longitude}`;
        console.log(this.amendedUrl);
      });
    }
    return this.http.get<any>(this.amendedUrl);
  }
}

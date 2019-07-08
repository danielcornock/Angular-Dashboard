import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.darksky.net/forecast/5389175401cca0f21832cc7e70ee4da0/37.8267,-122.4233';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

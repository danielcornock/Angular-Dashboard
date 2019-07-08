import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  private latitude: number;
  private longitude: number;
  constructor() { }

  ngOnInit() {
    this.fetchWeather();
  }

  fetchWeather() {
    // longitude: number;
    if (!navigator.geolocation) {
      console.log('Navigator not active');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }
}

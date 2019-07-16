import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  private latitude: number;
  private longitude: number;
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.fetchWeather();
  }

  fetchWeather() {
    // longitude: number;

    this.weatherService
      .getWeather()
      .subscribe(data => console.log(data));
  }
}

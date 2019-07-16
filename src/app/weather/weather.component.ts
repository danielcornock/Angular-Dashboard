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

  public temperature: number;
  public location: string;
  public weather: string;
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.fetchWeather();
  }

  fetchWeather() {
    // longitude: number;

    this.weatherService.getWeather().subscribe(data => {
        console.log(data);
        this.temperature = Math.floor(data.main.temp-273.15);
        this.location = data.name;
        this.weather = data.weather[0].main;
    });
  }
}

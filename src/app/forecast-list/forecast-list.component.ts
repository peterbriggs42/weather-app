import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent implements OnInit {
  forecast: any[];

  constructor(private forecastService: ForecastService) {
  }

  ngOnInit() {
    this.forecast = this.forecastService.getForecast();
  }
}

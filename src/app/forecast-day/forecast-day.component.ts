import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.css']
})
export class ForecastDayComponent implements OnInit {
  @Input() day: Day;
  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
  }

  getWeatherIcon(code) {
    let codesMap = this.forecastService.getForecastCodes();
    let codeStr = codesMap[code];
    console.log('codeStr: ' + codeStr);
    switch (codeStr) {
      case 'partly cloudy (day)':
        return 'wi wi-day-cloudy';
      case 'mostly cloudy (day)':
        return 'wi wi-cloudy';
      case 'windy':
      case 'blustery':
        return 'wi wi-day-windy';
      default:
        return 'wi wi-day-sunny';
    }
  }
}

export class Day {
  code: string;
  date: string;
  day: string;
  high: number;
  low: number;
  text: string;
}

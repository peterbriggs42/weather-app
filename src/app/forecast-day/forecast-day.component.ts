import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.css']
})
export class ForecastDayComponent implements OnInit {
  @Input() day: any;
  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
  }
  
  alertColorClass: string = 'weather-alert-container';
  isAlertWeather: boolean = false;

  addAlertStyle($event){
    if (!this.isAlertWeather) {
      return;
    }
    this.alertColorClass = ($event.type == 'mouseover') ? 'weather-alert-container-hover' : 'weather-alert-container'; //rgba(255, 66, 56, 0.76)
  }

  isColdAlert() {
    let low = Number.parseInt(this.day.low, 10);
    let coldAlertClass = '';
    if (low && low < 32) {
      coldAlertClass = 'cold-alert';
    } 
    return coldAlertClass;
  }

  isTemperatureAlert(temperatureStr) {
    let temperature = Number.parseInt(temperatureStr);
    let temperatureAlertClass = '';
    if (temperature) {
      if (temperature > 85) {
        temperatureAlertClass = 'heat-alert'
      }
      else if (temperature < 32) {
        temperatureAlertClass = 'cold-alert';
      }
    }
    return temperatureAlertClass;
  }

  getWeatherIcon(code) {
    let forecastMap = this.forecastService.getForecastCodes();
    let iconClass = '';
    switch (code) {
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
      case "11":
      case "12":
      case "18":
      case "17":
      case "35":
      case "40":
        iconClass = 'wi wi-showers';
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "37":
      case "38":
      case "39":
      case "45":
      case "47":
        iconClass = 'wi wi-thunderstorm';
        break;
      case "13":
      case "14":
      case "15":
      case "16":
      case "41":
      case "42":
      case "43":
      case "46":
        iconClass = 'wi wi-snow'
        break;
      default:
        iconClass = '';
        break;
    }
      this.isAlertWeather = (iconClass != '');
      return iconClass;
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

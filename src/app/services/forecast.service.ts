import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Subject, Observable } from 'rxjs/Rx';


@Injectable()
export class ForecastService {

  constructor(private http: Http) { }

  getForecastObservable(): Observable<any[]> {
    return this.http.get(YAHOO_WEATHER_API_URL)
      .map((response: Response) => {
        return response.json().query.results.channel.item.forecast;
      })
      .catch(this.handleError);
  }

  handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  getForecastCodes() {
    return FORECAST_CODES;
  }
}

const YAHOO_WEATHER_API_URL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Chicago%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

const FORECAST_CODES = {
  "0": "tornado",
  "1": "tropical storm",
  "2": "hurricane",
  "3": "severe thunderstorms",
  "4": "thunderstorms",
  "5": "mixed rain and snow",
  "6": "mixed rain and sleet",
  "7": "mixed snow and sleet",
  "8": "freezing drizzle",
  "9": "drizzle",
  "10": "freezing rain",
  "11": "showers",
  "12": "showers",
  "13": "snow flurries",
  "14": "light snow showers",
  "15": "blowing snow",
  "16": "snow",
  "17": "hail",
  "18": "sleet",
  "19": "dust",
  "20": "foggy",
  "21": "haze",
  "22": "smoky",
  "23": "blustery",
  "24": "windy",
  "25": "cold",
  "26": "cloudy",
  "27": "mostly cloudy (night)",
  "28": "mostly cloudy (day)",
  "29": "partly cloudy (night)",
  "30": "partly cloudy (day)",
  "31": "clear (night)",
  "32": "sunny",
  "33": "fair (night)",
  "34": "fair (day)",
  "35": "mixed rain and hail",
  "36": "hot",
  "37": "isolated thunderstorms",
  "38": "scattered thunderstorms",
  "39": "scattered thunderstorms",
  "40": "scattered showers",
  "41": "heavy snow",
  "42": "scattered snow showers",
  "43": "heavy snow",
  "44": "partly cloudy",
  "45": "thundershowers",
  "46": "snow showers",
  "47": "isolated thundershowers",
  "3200": "not available"
};

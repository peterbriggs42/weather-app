import { Injectable } from '@angular/core';

@Injectable()
export class ForecastService {

  constructor() { }
  getForecast() {
    return FORECAST;
  }

  getForecastCodes() {
    return FORECAST_CODES;
  }
}

const FORECAST = [
  {
    "code": "28",
    "date": "16 Mar 2018",
    "day": "Fri",
    "high": "34",
    "low": "28",
    "text": "Mostly Cloudy"
  },
  {
    "code": "30",
    "date": "17 Mar 2018",
    "day": "Sat",
    "high": "39",
    "low": "33",
    "text": "Partly Cloudy"
  },
  {
    "code": "34",
    "date": "18 Mar 2018",
    "day": "Sun",
    "high": "47",
    "low": "29",
    "text": "Mostly Sunny"
  },
  {
    "code": "23",
    "date": "19 Mar 2018",
    "day": "Mon",
    "high": "39",
    "low": "34",
    "text": "Breezy"
  },
  {
    "code": "23",
    "date": "20 Mar 2018",
    "day": "Tue",
    "high": "35",
    "low": "29",
    "text": "Breezy"
  },
  {
    "code": "23",
    "date": "21 Mar 2018",
    "day": "Wed",
    "high": "34",
    "low": "30",
    "text": "Breezy"
  },
  {
    "code": "30",
    "date": "22 Mar 2018",
    "day": "Thu",
    "high": "37",
    "low": "29",
    "text": "Partly Cloudy"
  },
  {
    "code": "30",
    "date": "23 Mar 2018",
    "day": "Fri",
    "high": "43",
    "low": "31",
    "text": "Partly Cloudy"
  },
  {
    "code": "12",
    "date": "24 Mar 2018",
    "day": "Sat",
    "high": "46",
    "low": "37",
    "text": "Rain"
  },
  {
    "code": "24",
    "date": "25 Mar 2018",
    "day": "Sun",
    "high": "46",
    "low": "38",
    "text": "Windy"
  }
];

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

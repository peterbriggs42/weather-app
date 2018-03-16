import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  forecast = [
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
  ];
}

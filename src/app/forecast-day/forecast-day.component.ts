import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.css']
})
export class ForecastDayComponent implements OnInit {
  @Input() day: Day;
  constructor() { }

  ngOnInit() {
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

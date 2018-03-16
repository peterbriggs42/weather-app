import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../services/forecast.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent implements OnInit {
  forecastObservable: Observable<any[]>;

  constructor(private forecastService: ForecastService) {
  }

  ngOnInit() {
    this.forecastObservable = this.forecastService.getForecastObservable();
    this.forecastObservable.subscribe(response => {
      console.log('ok here\'s the server data: ');
      console.log(response);
    }, error => {
      console.log('there was an error: ' + error);
    });
  }
}

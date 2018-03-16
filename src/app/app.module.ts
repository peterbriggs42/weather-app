import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ForecastDayComponent } from './forecast-day/forecast-day.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ForecastDayComponent,
    ForecastListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

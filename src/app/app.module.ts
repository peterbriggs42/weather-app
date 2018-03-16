import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ForecastDayComponent } from './forecast-day/forecast-day.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ForecastService } from './services/forecast.service';

@NgModule({
  declarations: [
    AppComponent,
    ForecastDayComponent,
    ForecastListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';

@NgModule({
  declarations: [AppComponent, LineChartComponent, BarChartComponent, DoughnutChartComponent, RadarChartComponent],
  imports: [BrowserModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

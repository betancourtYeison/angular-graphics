import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabels: Label[] = [
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];

  constructor() {}

  ngOnInit() {}

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    this.barChartData[0].data = data;
  }
}

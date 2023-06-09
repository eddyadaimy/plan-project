import { Component, OnInit } from '@angular/core';
import { subMenuModel } from '../shared/submenu/subMenuModel/subMenu.interface';

@Component({
  selector: 'app-plan-measure',
  templateUrl: './plan-measure.component.html',
  styleUrls: ['./plan-measure.component.css']
})
export class PlanMeasureComponent implements OnInit {
  currentPage: string ='Overview';
subMenuPages: subMenuModel[] = [
  { displayName: "Overview",routeUrl:  "overview"},
  { displayName: "Logframe",routeUrl:  "logframe"},
  { displayName: "Indicators",routeUrl:  "/"},
  { displayName: "ACtivities",routeUrl:  "/"},
  { displayName: "File Storage",routeUrl:  "/"},
  { displayName: "Reports",routeUrl:  "/"},
  { displayName: "Monitoring Visits",routeUrl:  "/"},
  { displayName: "Settings",routeUrl:  "/"}
]

constructor(){

}
  ngOnInit() {
    this.currentPage = sessionStorage.getItem('pageLink') || 'Overview';
  }



}

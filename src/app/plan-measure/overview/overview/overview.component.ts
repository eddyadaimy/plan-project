import { Component, OnInit } from '@angular/core';
import { PlanListModel } from './overview.interface';
import {activities, indicators} from '../../../sampleData'
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  progressActiviesPlan: PlanListModel = activities;
  progressIndicatorsPlan: PlanListModel = indicators;
  constructor(){

  }
  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanMeasureRoutingModule } from './plan-measure-routing.module';
import { PlanMeasureComponent } from './plan-measure.component';


@NgModule({
  declarations: [
    PlanMeasureComponent
  ],
  imports: [
    CommonModule,
    PlanMeasureRoutingModule
  ]
})
export class PlanMeasureModule { }

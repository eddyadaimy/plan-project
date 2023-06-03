import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanMeasureRoutingModule } from './plan-measure-routing.module';
import { PlanMeasureComponent } from './plan-measure.component';
import { SubmenuComponent } from '../shared/submenu/submenu.component';


@NgModule({
  declarations: [
    PlanMeasureComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    PlanMeasureRoutingModule
  ]
})
export class PlanMeasureModule { }

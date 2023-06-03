import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanMeasureRoutingModule } from './plan-measure-routing.module';
import { PlanMeasureComponent } from './plan-measure.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        PlanMeasureComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PlanMeasureRoutingModule,
    ]
})
export class PlanMeasureModule { }

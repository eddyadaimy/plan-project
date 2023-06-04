import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanMeasureRoutingModule } from './plan-measure-routing.module';
import { PlanMeasureComponent } from './plan-measure.component';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbModule } from 'params-xng-breadcrumb';
import { OverviewModule } from './overview/overview.module';
import { LogframeComponent } from './logframe/logframe.component';


@NgModule({
    declarations: [
        PlanMeasureComponent,
        LogframeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PlanMeasureRoutingModule,
        BreadcrumbModule,
        OverviewModule
    ]
})
export class PlanMeasureModule { }

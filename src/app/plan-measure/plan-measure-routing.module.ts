import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanMeasureComponent } from './plan-measure.component';
import { OverviewComponent } from './overview/overview.component';
import { LogframeComponent } from './logframe/logframe.component';

const routes: Routes = [
  {
    path: '',
    component: PlanMeasureComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'logframe', component: LogframeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanMeasureRoutingModule { }

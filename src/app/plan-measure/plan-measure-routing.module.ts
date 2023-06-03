import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanMeasureComponent } from './plan-measure.component';
import { OverviewComponent } from './overview/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: PlanMeasureComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      // { path: 'logframe', component: LogframeComponent },
      // { path: 'indicators', component: IndicatorsComponent },
      // { path: 'activities', component: ActivitiesComponent },
      // { path: 'full-storage', component: FullStorageComponent },
      // { path: 'reports', component: ReportsComponent },
      // { path: 'monitoring-visits', component: MonitoringVisitsComponent },
      // { path: 'settings', component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanMeasureRoutingModule { }

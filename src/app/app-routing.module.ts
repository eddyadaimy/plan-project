import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'plan-measure', loadChildren: () => import('./plan-measure/plan-measure.module').then(m => m.PlanMeasureModule) }
  // { path: 'home', loadChildren: () => import('./home.module').then(m => m.HomeModule) },
  // { path: 'datahub', loadChildren: () => import('./datahub.module').then(m => m.DatahubModule) },
  // { path: 'plan-measure', loadChildren: () => import('./plan-measure.module').then(m => m.PlanMeasureModule) },
  // { path: 'analytics', loadChildren: () => import('./analytics.module').then(m => m.AnalyticsModule) },
  // { path: 'beneficiaries', loadChildren: () => import('./beneficiaries.module').then(m => m.BeneficiariesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

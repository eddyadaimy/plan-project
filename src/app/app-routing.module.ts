import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'plan-measure', pathMatch: 'full' },
  { path: 'plan-measure', loadChildren: () => import('./plan-measure/plan-measure.module').then(m => m.PlanMeasureModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

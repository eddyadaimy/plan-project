import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { OverviewComponent } from './overview.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';



@NgModule({
  declarations: [
    OverviewComponent,
    PlanListComponent,
    CommentsComponent,
    ProjectDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OverviewModule { }

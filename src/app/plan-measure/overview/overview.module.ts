import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { PlanListComponent } from './overview/plan-list/plan-list.component';
import { CommentsComponent } from './overview/comments/comments.component';



@NgModule({
  declarations: [
    OverviewComponent,
    PlanListComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OverviewModule { }

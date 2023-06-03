import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { OverviewComponent } from './overview.component';
import { PlanListComponent } from './plan-list/plan-list.component';



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

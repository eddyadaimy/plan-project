import { Component, Input } from '@angular/core';
import { PlanListModel } from '../overview.interface';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent {
@Input() planTable:PlanListModel | null = null;
}

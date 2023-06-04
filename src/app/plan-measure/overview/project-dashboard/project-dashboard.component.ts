import { Component } from '@angular/core';
import { dashboardData } from 'src/app/sampleData';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent {
  progressPercentage = 70;
  dummyData = dashboardData;
}

import { Component } from '@angular/core';
import { logFrameData } from 'src/app/sampleData';
interface Activity {
  activity: string;
}

interface Indicator {
  indicator: string;
  activities: Activity[];
}

interface Outcome {
  outcome: string;
  indicators: Indicator[];
}

interface Impact {
  impact: string;
  outcomes: Outcome[];
}

@Component({
  selector: 'app-logframe',
  templateUrl: './logframe.component.html',
  styleUrls: ['./logframe.component.css']
})
export class LogframeComponent {

  impactData: Impact[] = logFrameData;
  isModalOpen:boolean = false;
  title:string = ""

  addOutcome(index:number): void {
    this.isModalOpen= true;
    this.title= "Outcome"
    const newOutcome: Outcome = {
      outcome: 'New Outcome Message',
      indicators: []
    };
    this.impactData[index].outcomes.push(newOutcome);
  }

  addIndicator(outcome: Outcome): void {
    const newIndicator: Indicator = {
      indicator: 'New Indicator',
      activities: []
    };
    outcome.indicators.push(newIndicator);
  }

  addActivity(indicator: Indicator): void {
    const newActivity: Activity = {
      activity: 'New Activity'
    };
    indicator.activities.push(newActivity);
  }

  modalToggle($event:boolean){
    this.isModalOpen = $event;
  }

}

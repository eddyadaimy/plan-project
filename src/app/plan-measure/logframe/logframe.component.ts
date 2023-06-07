import { Component } from '@angular/core';
import { logFrameData } from 'src/app/sampleData';
import { Impact, Outcome, Indicator, Activity } from './model/logframeModel.interface';

@Component({
  selector: 'app-logframe',
  templateUrl: './logframe.component.html',
  styleUrls: ['./logframe.component.css']
})
export class LogframeComponent {

  impactData: Impact[] = logFrameData;
  isModalOpen:boolean = false;
  title:string = "";

  currentObj:any;
  newCreatedObj:any;
  propertyName: string = "";

  addOutcome(impact:Impact): void {
    this.title= "Outcome";
    this.currentObj = impact;
    const newOutcome: Outcome = {
      outcome: 'New Outcome Message',
      indicators: []
    };
    this.newCreatedObj = newOutcome;
    this.propertyName = "outcomes";
    this.isModalOpen= true;
  }

  addIndicator(outcome: Outcome): void {
    this.title= "Indicator";
    this.currentObj = outcome;
    const newIndicator: Indicator = {
      indicator: 'New Indicator',
      activities: []
    };
    this.newCreatedObj = newIndicator;
    this.propertyName = "indicators";
    this.isModalOpen= true;
  }

  addActivity(indicator: Indicator): void {
    this.title= "Activity";
    this.currentObj = indicator;
    const newActivity : Activity = {
      activity: 'New Activity'
    };
    this.newCreatedObj = newActivity;
    this.propertyName = "activities";
    this.isModalOpen= true;

  }

  modalToggle($event:boolean){
    this.isModalOpen = $event;
  }

  create($event:string){
    var keyName = Object.keys(this.newCreatedObj)[0];
    this.newCreatedObj[keyName] = $event;
    this.currentObj[this.propertyName].push(this.newCreatedObj)
  }

}

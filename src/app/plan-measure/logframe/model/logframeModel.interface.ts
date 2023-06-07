export interface Activity {
  activity: string;
}

export interface Indicator {
  indicator: string;
  activities: Activity[];
}

export interface Outcome {
  outcome: string;
  indicators: Indicator[];
}

export interface Impact {
  impact: string;
  outcomes: Outcome[];
}

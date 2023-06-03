export interface PlanListModel{
  title:string;
  subTitle:string;
  displayTextMsg:string,
  displayTextValue:string,
  ListOfPlans: PlanList[];
}

export interface PlanList {
  plan:string;
  message:string;
  value:planVlue;
}

export interface planVlue{
  value:string;
  status?:string | null
}

export interface comment {
  name:string,
  imgUrl:string,
  comment:string
}

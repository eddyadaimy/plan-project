let activities =
  {
  title: 'Activities',
  subTitle: 'Activity',
  displayTextMsg:'Progress',
  displayTextValue:'Status',
   ListOfPlans: [
    {plan:'Lorem Ipsum is simply dummy text of the printing ',message:'100%',value:{value:'Completed', status:'completed'}},
    {plan:'Lorem Ipsum is simply dummy text of the printing ',message:'xxx',value:{value:'Ongoing', status:'on'}},
    {plan:'Lorem Ipsum is simply dummy text of the printing ',message:'xxx',value:{value:'Not Started', status:'off'}},
    {plan:'Lorem Ipsum is simply dummy text of the printing ',message:'xxx',value:{value:'Ongoing', status:'on'}},
  ]};

  let indicators =
  {title: 'Indicators', subTitle: 'Indicator', displayTextMsg:'Base-line', displayTextValue:'Target',
  ListOfPlans: [
   {plan:'Lorem Ipsum is simply dummy text of the printing ',message:'50',value:{value:'5000', status:null}},
   {plan:'Lorem Ipsum is simply dummy text of the printing ',message:'xxx',value:{value:'xxx', status:null}},
   {plan:'Lorem Ipsum is simply dummy text of the printing ',message:'xxx',value:{value:'xxx', status:null}},
   {plan:'Lorem Ipsum is simply dummy text of the printing ',message:'xxx',value:{value:'xxx', status: null}},
 ]};

 let comments = [
  {
    name:'Alice',
    imgUrl:'../../../../../assets/profilePic.png',
    comment:'We are on it! Thanks Alex'
  },
  {
    name:'Alice',
    imgUrl:'../../../../../assets/profilePic.png',
    comment:'Lorem Ipsum is simply dummy text of the printing '
  },
 ];

 let dashboardData = [
  {name:'sample', value:'data'},
  {name:'sample', value:'data'},
  {name:'sample', value:'data'},
]

let logFrameData = [
{ impact:'Impact Message',
  outcomes:[
    {outcome:'1 Outcome Message', indicators:[]},
    {outcome:'2 Outcome Message', indicators:[
      {indicator:'1 indicator', activities:[{activity:'1 activity'}]},
      {indicator:'2 indicator', activities:[{activity:'2 activity'}]}
    ]},
  ]
}
]
  export { activities, indicators,comments, dashboardData,logFrameData }


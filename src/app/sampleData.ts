let activities =
  {
  title: 'Activities',
  subTitle: 'Activity',
  displayTextMsg:'Progress',
  displayTextValue:'Status',
   ListOfPlans: [
    {plan:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',message:'100%',value:{value:'Completed', status:'completed'}},
    {plan:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',message:'xxx',value:{value:'Ongoing', status:'on'}},
    {plan:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',message:'xxx',value:{value:'Not Started', status:'off'}},
    {plan:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',message:'xxx',value:{value:'Ongoing', status:'on'}},
  ]};

  let indicators =
  {title: 'Indicators', subTitle: 'Indicator', displayTextMsg:'Base-line', displayTextValue:'Target',
  ListOfPlans: [
   {plan:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',message:'50',value:{value:'5000', status:null}},
   {plan:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',message:'xxx',value:{value:'xxx', status:null}},
   {plan:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',message:'xxx',value:{value:'xxx', status:null}},
   {plan:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',message:'xxx',value:{value:'xxx', status: null}},
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
    comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
 ]
  export { activities, indicators,comments }

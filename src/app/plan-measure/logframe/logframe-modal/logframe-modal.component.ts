import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logframe-modal',
  templateUrl: './logframe-modal.component.html',
  styleUrls: ['./logframe-modal.component.css']
})
export class LogframeModalComponent implements OnInit {

  @Input() isModalOpen:boolean = false;
  @Output() closeModalEvent = new EventEmitter();
  @Output() sendDataToLogFrameEvent = new EventEmitter();
  @Input() title:string ='';
  myForm!: FormGroup;
  displayFormObject: any = [
      {display_name:'name',value: '', required: true, placeholder:"Enter Name" },
      {display_name:'dummy1',value: '', required: false ,placeholder:'dummy1 input'},
      {display_name:'dummy2',value: '', required: false ,placeholder:'dummy2 input'},
      {display_name:'dummy3',value: '', required: false ,placeholder:'dummy3 input'},
      {display_name:'dummy4',value: '', required: false ,placeholder:'dummy4 input'},
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.generateFormFromJSON(this.displayFormObject);
  }

  generateFormFromJSON(array: any[]): FormGroup {
    const formGroup: FormGroup = this.formBuilder.group({});
    array.forEach(item => {
      const propName = item.display_name;
      const validators = item.required ? [Validators.required] : [];
      formGroup.addControl(propName, this.formBuilder.control(item.value, validators));
    });
     return formGroup;
  }

  closeModal() {
    this.isModalOpen = false;
    this.closeModalEvent.emit(this.isModalOpen);
  }

  create(){
    if (this.myForm.valid) {
      this.sendDataToLogFrameEvent.emit(this.myForm.get('name')?.value)
    } else {
      alert('Please fill the name field.');
    }
  }
}

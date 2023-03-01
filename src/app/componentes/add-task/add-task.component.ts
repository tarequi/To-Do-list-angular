import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service'; 


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent {

  toggleForm:boolean;

  constructor(private uiservice:UiService){
    this.uiservice.onToggle().subscribe((val) => {
      this.toggleForm = val;
    });
  }


  @Output() addTaskFunction = new EventEmitter();

  taskForm = new FormGroup({
    text:new FormControl('',Validators.required),
    day:new FormControl('',Validators.required)
  });

  onSubmit(){
    if(this.taskForm.value.text !== "" && this.taskForm.value.day !==""){
      this.addTaskFunction.emit(this.taskForm.value);
    }
    else{
      console.log("empty");
    }
  }
}

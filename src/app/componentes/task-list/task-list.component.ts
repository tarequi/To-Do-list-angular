import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task_interface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
}) 
export class TaskListComponent implements OnInit{


  @Input() task:Task; 

  @Input() title:string;

  // @Output() delete_task = new EventEmitter();
  @Output() delete_task:EventEmitter<Task> = new EventEmitter();

  @Output() toggleReminder = new EventEmitter();

  fa_tims_icon = faTimes;

  reminder:boolean = false;
 
  constructor(){}

  ngOnInit(): void {
    
  }

  delete(ta){
    this.delete_task.emit(ta);
  }

  toggle(taskRe){
    this.toggleReminder.emit(taskRe);
  }
}

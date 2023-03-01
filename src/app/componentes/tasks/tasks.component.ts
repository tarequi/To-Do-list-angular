import { Component, OnInit } from '@angular/core';
// import { TASKS } from '../../tasks';
import { Task } from '../../Task_interface';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{

  toggleForm:boolean=false;


  tasks:Task[] = [];

  title_from_pearent:string = "tasks";


  toggle:boolean = false;
  // books:any;

  constructor(private task_service:TaskServiceService){}

  ngOnInit(): void {
    this.task_service.getTasks().subscribe((task_from_serv) => {
      this.tasks = task_from_serv;
    });

    //(function that return value from backend)
    // this.task_service.getbook().subscribe((book) => {
    //   console.log(book);
    // });
    
  }

  deleteFromTaskComponent(task:Task){
    this.task_service.deleteTask(task).subscribe(
      ()=> (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }


  togl(task :Task){
    task.reminder = !task.reminder;
    this.task_service.updateToggle(task).subscribe();

  }


  addTasks(task:Task){
    this.task_service.addTaskService(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Task } from '../Task_interface';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http:HttpClient) { }


  
  url = 'http://localhost:5000/tasks';

  getTasks() : Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }

  //call to backend (to get data) 
  // url = "http://localhost:3000/fofo"
  // getbook() :Observable<any>{
  //   return this.http.get(this.url);
  // }

  deleteTask(task:Task) : Observable<Task>{
    return this.http.delete<Task>(`${this.url}/${task.id}`);
  }


  updateToggle(task:Task) : Observable<Task>{
    const apiUrl = `${this.url}/${task.id}`; 
    return this.http.put<Task>(apiUrl,task);//put (take 3 or 2 argument)
  }


  addTaskService(task:Task) :Observable<Task>{
    const apiUrl = `${this.url}`; 
    return this.http.post<Task>(apiUrl,task);
  }





}

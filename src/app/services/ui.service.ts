import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  showAddTask:boolean = false;
  subject = new Subject<any>();


  toggleAddTask():void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }


  onToggle():Observable<any>{
    return this.subject.asObservable();
  }


}

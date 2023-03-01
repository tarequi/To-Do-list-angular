import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  title:string = 'Task Manager'; 

  changeAddBtn:boolean;

  constructor(private uiserv:UiService,private route:Router){
  
  }

  ngOnInit(): void {
    this.uiserv.onToggle().subscribe((val) =>{
      this.changeAddBtn = val;
    })
  }

  addTask(){
    this.uiserv.toggleAddTask()
  } 

  // To Hide Add Button in footer
  hideBtn(url){
   return this.route.url === url;
  }
}

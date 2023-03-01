import { Component , OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit{


  @Input() text:string;
  @Input() color:string;
  @Output() addButton = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
     
  }


  addClick(){
    this.addButton.emit();
  }
}

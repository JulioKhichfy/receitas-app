import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  collapsed = true;
  corDaVez: string = 'blue';
  constructor(){
    this.corDaVez = Math.random() > 0.5 ? 'blue' : 'red';
  } 

  getColor(){
    return this.corDaVez;
  }

}

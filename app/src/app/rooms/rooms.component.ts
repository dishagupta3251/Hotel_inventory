import { Component } from '@angular/core';
import { Info } from './rooms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgClass,NgIf],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  name:string="Skyhilton"
  nrooms:number=10;
  pressed:boolean=false;
  toggle(){
    if(this.pressed===false)
   { this.nrooms=20;
    this.pressed=true;}
   else
   {this.nrooms=10;
   this.pressed=false;}
  }
  rooms : Info={
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms:15
  }


}


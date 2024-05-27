import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [NgClass, NgIf,NgFor,DatePipe,NgbModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
  
})
export class RoomListComponent implements OnInit {
 

 @Input () rooms:RoomList[]=[]; //component communication

 @Output () roomSelected=new EventEmitter<RoomList>();

 ngOnInit(): void {}

 selectedRoom(room:RoomList){
  this.roomSelected.emit(room)
 }



}

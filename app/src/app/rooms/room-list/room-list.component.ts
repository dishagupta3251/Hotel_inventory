import { Component, Input } from '@angular/core';
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
export class RoomListComponent {

 @Input () rooms:RoomList[]=[]; //component communication

}

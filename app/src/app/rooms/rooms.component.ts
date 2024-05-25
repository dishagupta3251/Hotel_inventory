import { Component } from '@angular/core';
import { Info, RoomList } from './rooms';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomListComponent } from "./room-list/room-list.component";

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.css',
    imports: [NgClass, NgIf, NgFor, DatePipe, NgbModule, RoomListComponent]
})
export class RoomsComponent {

  name: string = "Skyhilton"
  nrooms: number = 10;
  pressed: boolean = false;
  toggle() {
    if (this.pressed === false) {
      this.nrooms = 20;
      this.pressed = true;
    }
    else {
      this.nrooms = 10;
      this.pressed = false;
    }
  }
  rooms: Info = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 15
  }
  List: RoomList[] = [{
    roomNo: 101,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 1000,
    photo: 'https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I',
    checkInTime: new Date('11-Nov-2024'),
    checkOutTime: new Date('12-Nov-2024')
  },
  {
    roomNo: 102,
    roomType: 'Single Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 500,
    photo: 'https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I',
    checkInTime: new Date('11-Nov-2024'),
    checkOutTime: new Date('12-Nov-2024')
  },
{
    roomNo: 103,
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 2000,
    photo: 'https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I',
    checkInTime: new Date('11-Nov-2024'),
    checkOutTime: new Date('12-Nov-2024')

  }

  ]

}


import { Component } from '@angular/core';
import { Info, RoomList } from './rooms';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgClass, NgIf,NgFor],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
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
  roomList: RoomList[] = [{
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


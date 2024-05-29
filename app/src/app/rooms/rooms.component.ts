import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { Info, RoomList } from './rooms';
import { DatePipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomListComponent } from "./room-list/room-list.component";
import { HeaderComponent } from "../header/header.component";
import { ContainerComponent } from '../container/container.component';

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.css',
    imports: [NgClass, NgIf, NgFor, DatePipe, NgbModule, RoomListComponent, JsonPipe, HeaderComponent, ContainerComponent]
})
export class RoomsComponent implements OnInit,AfterViewInit {
 
  @ViewChild(HeaderComponent) headercomponent!:HeaderComponent;

 


  room_display!:RoomList

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

 

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.headercomponent.title='Room Details';
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
  selectRoom(room:RoomList)
  {
      this.room_display=room;
  }
  ngOnInit(): void {}
   count:number=0;
  addRoom(){
    const new_room:RoomList={
      roomNo: 103,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 2000,
      photo: 'https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('12-Nov-2024')

      

    };
this.List=[...this.List,new_room] //changedetection works. It here detects a change is made to entire property a of component. Three dots tell already present data in (our case array of rooms from 101 to 103) property and then new property is added to it
  }
  

}


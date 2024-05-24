export interface Info{
    availableRooms:number
    bookedRooms:number
    totalRooms:number
}
export interface RoomList{
    roomNo:number;
    roomType:string;
    amenities:string;
    price:number;
    photo:string;
    checkInTime:Date;
    checkOutTime:Date;
}
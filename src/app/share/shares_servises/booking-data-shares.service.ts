import {Injectable} from '@angular/core';
import {RoomMnService} from "../../core/services/room-mn.service";

@Injectable({
  providedIn: 'root'
})
export class BookingDataSharesService{

  private _start:string='';
  private _end:string='';
  private _bookingDetails:any []=[];
  private _roomDetails:any []=[];
  private _roomNumber:string ='';

  constructor(private roomS:RoomMnService) { }

  get roomNumber(): string {
    return this._roomNumber;
  }

  set roomNumber(value: string) {
    this._roomNumber = value;
  }

  getStart(): string {
    return this._start;
  }

  setStart(value: string) {
    this._start = value;
  }

  getEnd(): string {
    return this._end;
  }

  setEnd(value: string) {
    this._end = value;
  }

  get bookingDetails(): any[] {
    return this._bookingDetails;
  }

  setBookingDetails(value: any[]) {
    this._bookingDetails = value;
  }

  getRoomDetails(): any[] {
    return this._roomDetails;
  }

  setRoomDetails(value: any[]) {
    this._roomDetails = value;
  }



   checkAvailableRooms(){
    let is_have: boolean = false;
    for (let i = 0; i < this.bookingDetails.length; i++) {
      if(new Date(this._start) <= new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].start_date) <= new Date(this._end)){
        is_have = true;
      }else if(new Date(this._start) <= new Date(this.bookingDetails[i].end_date) && new Date(this.bookingDetails[i].end_date) <= new Date(this._end)){
        is_have = true;
      }else if(new Date(this._start) > new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].end_date) > new Date(this._end)){
        is_have = true;
      }else if(new Date(this._start) < new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].end_date) < new Date(this._end)){
        is_have = true;
      }else {
        is_have = false;
      }
      if(is_have){
        for (let j = 0; j < this._roomDetails.length; j++) {
          if(this.bookingDetails[i].room.room_number===this._roomDetails[j].room_number){
            this._roomDetails.splice(j,1);
            break;
          }
        }
      }
    }
  }

}

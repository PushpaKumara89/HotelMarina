import {Injectable} from '@angular/core';
import {RoomMnService} from "../../core/services/room-mn.service";

@Injectable({
  providedIn: 'root'
})
export class BookingDataSharesService{
  private _bookingDetails:any []=[];
  private _roomDetails:any []=[];
  private _roomNumber ='';

  constructor(private roomS:RoomMnService) {
    this.loadAllRooms();
  }

  get roomNumber(): string {
    return this._roomNumber;
  }

  set roomNumber(value: string) {
    sessionStorage.setItem('room_num',value);
    this._roomNumber = value;
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


  setDateRange(s: string, e: string){
    let data ={start:s,end:e}
    sessionStorage.setItem('dateRange',JSON.stringify(data));
    this.loadAllRooms();
  }

  getDateRange():any{
    let temp=sessionStorage.getItem('dateRange')
    if(temp){
      return JSON.parse(temp);
    }
  }

  checkAvailableRooms(){
    const tem=this.getDateRange()
    let is_have: boolean = false;
    for (let i = 0; i < this.bookingDetails.length; i++) {
      if(new Date(tem.start) <= new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].start_date) <= new Date(tem.end)){
        is_have = true;
      }else if(new Date(tem.start) <= new Date(this.bookingDetails[i].end_date) && new Date(this.bookingDetails[i].end_date) <= new Date(tem.end)){
        is_have = true;
      }else if(new Date(tem.start) > new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].end_date) > new Date(tem.end)){
        is_have = true;
      }else if(new Date(tem.start) < new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].end_date) < new Date(tem.end)){
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

  private loadAllRooms() {
    this.roomS.getAllRoom().subscribe(response=>{
      this._roomDetails=response.data //allRooms
      this.checkAvailableRooms();
    },error=>{
      console.log(error);
    });
  }
}

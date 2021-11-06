import {Component, OnInit, Query} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RoomMnService} from "../../../../core/services/room-mn.service";
import {BookingDetailsService} from "../../core_guest/servises/booking-details.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-available-rooms',
  templateUrl: './available-rooms.component.html',
  styleUrls: ['./available-rooms.component.scss']
})
export class AvailableRoomsComponent implements OnInit {
  dateRangeForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  bookingDetails:any []=[];
  roomDetail:any []=[];
  constructor(private bookingDetailsService:BookingDetailsService,private roomsDetails:RoomMnService,private router:Router) {

    //this.tempRoom="22";

  }

  ngOnInit(): void {
    this.loadAllRooms();
    this.loadAllBookingDetails();
  }

  loadAllBookingDetails() {
    this.bookingDetailsService.getAllBooking().subscribe(response=>{
      this.bookingDetails=response.data;
      console.log(response.data)
    },error=>{
      console.log(error);
    });
  }
  private loadAllRooms() {
    this.roomsDetails.getAllRoom().subscribe(response=>{
      this.roomDetail=response.data;
    },error=>{
      console.log(error);
    });
  }

  tempRoom:any []=[];
  tempRoom2:any []=[];
  checkAvailable() {
    this.tempRoom2=this.roomDetail;
    const start = this.dateRangeForm.get('start')?.value;
    const end = this.dateRangeForm.get('end')?.value;
    if(new Date()>start){
      alert('pleas Peak Valid Dates ');
      /*return;*/

    }
    /*console.log(this.bookingDetails);*/
    //---------------------------------------------------------------------------------------------------------------------------------

    for (let i = 0; i < this.bookingDetails.length; i++) {
      console.log(new Date(start)>new Date(this.bookingDetails[i].start_date))
      console.log(this.bookingDetails[i].room.room_number)
      this.tempRoom=[];
      if(new Date(start)>new Date(this.bookingDetails[i].start_date)||new Date(end)>new Date(this.bookingDetails[i].end_date)){
        if(new Date(start)<new Date(this.bookingDetails[i].end_date)){

          for (let j = 0; j < this.tempRoom2.length; j++){
            if(this.bookingDetails[i].room.room_number!==this.roomDetail[j].room_number){

              this.tempRoom.push(this.roomDetail[j]);
            }
          }this.tempRoom2=this.tempRoom;
        }

        console.log('fffffffffffffffff')

        console.log(this.tempRoom2)
      }
    }
    //---------------------------------------------------------------------------------------------------------------------------

      let date:any=this.dateRangeForm.value
      let rooms:any[]=[];
      rooms=this.tempRoom2;
     this.router.navigate(['/guest_panel/available-rooms/room-selection'], {
       queryParams: {data: JSON.stringify(rooms), date: JSON.stringify(date)}
     }).then (r =>{
      return;
     })
  }


}

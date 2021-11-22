import {
  Component,
  OnInit
} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RoomMnService} from "../../../../core/services/room-mn.service";
import {BookingDetailsService} from "../../core_guest/servises/booking-details.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-available-rooms',
  templateUrl: './available-rooms.component.html',
  styleUrls: ['./available-rooms.component.scss']
})
export class AvailableRoomsComponent implements OnInit{
  dateRangeForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  bookingDetails:any []=[];
  roomDetails:any []=[];
  constructor(private bookingDetailsService:BookingDetailsService,private roomsDetails:RoomMnService,private router:Router) {
    this.loadAllRooms();
    this.loadAllBookingDetails();

  }



  ngOnInit(): void {
  }

  private loadAllBookingDetails() {
    this.bookingDetailsService.getAllBooking().subscribe(response=>{
      this.bookingDetails=response.data;
    },error=>{
      console.log(error);
    });
  }
  private loadAllRooms() {
    this.roomsDetails.getAllRoom().subscribe(response=>{
      this.roomDetails=response.data;

    },error=>{
      console.log(error);
    });
  }

  tempRoom:any []=[];
  checkAvailable() {
    const start = this.dateRangeForm.get('start')?.value;
    const end = this.dateRangeForm.get('end')?.value;
    if (new Date() > start) {
      alert('pleas Peak Valid Dates ');
      return;

    }

    this.tempRoom=this.roomDetails;
    let is_have: boolean = false;

    for (let i = 0; i < this.bookingDetails.length; i++) {
      if(new Date(start) <= new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].start_date) <= new Date(end)){
        is_have = true;
      }else if(new Date(start) <= new Date(this.bookingDetails[i].end_date) && new Date(this.bookingDetails[i].end_date) <= new Date(end)){
        is_have = true;
      }else if(new Date(start) > new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].end_date) > new Date(end)){
        is_have = true;
      }else if(new Date(start) < new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].end_date) < new Date(end)){
        is_have = true;
      }else {
        is_have = false;
      }
      if(is_have){
        for (let j = 0; j < this.tempRoom.length; j++) {
          if(this.bookingDetails[i].room.room_number===this.tempRoom[j].room_number){
            this.tempRoom.splice(j,1);
            break;
          }
        }
      }
    }

      /*for (let i = 0; i < this.bookingDetails.length; i++) {
        if (new Date() < new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].start_date) < new Date(end) ||
          new Date(start) < new Date(this.bookingDetails[i].end_date) && new Date(this.bookingDetails[i].end_date) < new Date(end) ||
          new Date(start) > new Date(this.bookingDetails[i].start_date) && new Date(this.bookingDetails[i].end_date) > new Date(end)
        ) {
          is_have = true;

          if (is_have) {
            console.log(this.bookingDetails[i].room.room_number);
            for (let j = 0; j < this.roomDetail.length; j++) {
              if(this.bookingDetails[i].room.room_number==this.roomDetail[j].room_number){
                console.log(this.roomDetail[j].room_number+'-'+this.bookingDetails[i].room.room_number);
                this.roomDetail.splice(j,1);
                break;
              }
            }
          }
        }
      }*/


    let date: any = this.dateRangeForm.value
    let rooms: any[] = [];
    rooms = this.tempRoom;
    this.router.navigate(['/guest_panel/available-rooms/room-selection'], {
      queryParams: {data: JSON.stringify(rooms), date: JSON.stringify(date)}
    }).then(r => {
      return;
    })
    this.tempRoom=[];
  }
}

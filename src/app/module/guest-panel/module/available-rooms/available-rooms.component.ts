import {
  Component,
  OnInit
} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RoomMnService} from "../../../../core/services/room-mn.service";
import {BookingDetailsService} from "../../core_guest/servises/booking-details.service";
import {Router} from "@angular/router";
import {BookingDataSharesService} from "../../../../share/shares_servises/booking-data-shares.service";

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
  roomsDetail:any []=[];
  constructor(private dataShares:BookingDataSharesService, private bookingDetailsService:BookingDetailsService,private roomsDetails:RoomMnService,private router:Router) {


  }

  ngOnInit(): void {
    this.loadAllRooms();
    this.loadAllBookingDetails();
  }

  private loadAllBookingDetails() {
    this.bookingDetailsService.getAllBooking().subscribe(response=>{
      this.dataShares.setBookingDetails(response.data);
    },error=>{
      console.log(error);
    });
  }
  private loadAllRooms() {
    this.roomsDetails.getAllRoom().subscribe(response=>{
      this.roomsDetail=response.data

    },error=>{
      console.log(error);
    });
  }

  checkAvailable() {
    this.dataShares.setRoomDetails(this.roomsDetail)
    this.dataShares.Start=this.dateRangeForm.get('start')?.value;
    this.dataShares.setEnd(this.dateRangeForm.get('end')?.value);
    this.dataShares.checkAvailableRooms();
    if (new Date() > new Date(this.dateRangeForm.get('start')?.value)) {
      alert('pleas Peak Valid Dates ');
      return;

    }
    this.loadAllRooms();


    /*for (let i = 0; i < this.bookingDetails.length; i++) {
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
    }*/

    this.router.navigateByUrl('/guest_panel/available-rooms/room-selection').then(r => {
      console.log(r);
    })
  }
}

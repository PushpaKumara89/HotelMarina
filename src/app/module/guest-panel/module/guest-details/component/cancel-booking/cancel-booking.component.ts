import {Component, Inject, OnInit} from '@angular/core';
import {RoomMnService} from "../../../../../../core/services/room-mn.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {BookingDetailsService} from "../../../../core_guest/servises/booking-details.service";

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss']
})
export class CancelBookingComponent implements OnInit {

  constructor(private bookingService:BookingDetailsService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }


  deleteRoom(roomNo:string){
    this.bookingService.cancelBooking(roomNo).subscribe(response=>{

      alert(response.massage);
    },error => {
      console.log(error);
    })
  }

}

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

  constructor(private dataShares:BookingDataSharesService,
              private bookingDetailsService:BookingDetailsService,
              private router:Router) { }

  ngOnInit(): void {
    this.loadAllBookingDetails();
  }

  private loadAllBookingDetails() {
    this.bookingDetailsService.getAllBooking().subscribe(response=>{
      this.dataShares.setBookingDetails(response.data);
    },error=>{
      console.log(error);
    });
  }


  checkAvailable() {
    const {start,end}=this.dateRangeForm.value
    this.dataShares.setDateRange(start,end);
    /*this.dataShares.checkAvailableRooms();*/
    if (new Date() > new Date(start)) {
      alert('pleas Peak Valid Dates ');
      return;

    }

    this.router.navigateByUrl('/guest_panel/available-rooms/room-selection').then(r => {
      console.log(r);
    })
  }

  get() {
    const dd=this.dataShares.getDateRange()
    console.log(dd.start);
  }
}

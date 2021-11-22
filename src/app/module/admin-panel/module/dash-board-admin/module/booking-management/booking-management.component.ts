import { Component, OnInit } from '@angular/core';
import {BookingDetailsService} from "../../../../../guest-panel/core_guest/servises/booking-details.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.scss']
})
export class BookingManagementComponent implements OnInit {
  bookingDetails:any [] = [];
  constructor(private bookingService:BookingDetailsService,private router:Router) { }

  ngOnInit(): void {
    this.bookingService.getAllBooking().subscribe(response=>{
      console.log(response.data);
      this.bookingDetails=response.data;
    })
  }


  selectedGuest(value: any) {
   /* routerLink="/adminpanel/dashBoard-admin/booking-management/upcoming_booking"*/
    console.log(value)
    this.router.navigateByUrl('/adminpanel/dashBoard-admin/booking-management/upcoming_booking/'+value).then(r=>{

    });

  }
}

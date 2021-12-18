import {Component, DoCheck, OnInit} from '@angular/core';
import {CartServicesService} from "../../../../share/shares_servises/cart-services.service";
import {BookingDetailsService} from "../../core_guest/servises/booking-details.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteRoomComponent} from "../../../admin-panel/module/dash-board-admin/module/room-management/component/delete-room/delete-room.component";
import {CancelBookingComponent} from "./component/cancel-booking/cancel-booking.component";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.scss']
})
export class GuestDetailsComponent implements OnInit,DoCheck {
  cart:any =[];
  guest_details:any =[];
  constructor(private localstorage: LocalStorageService,
              private cartS:CartServicesService,
              public dialog: MatDialog, private rout:Router
  ) {
    this.guest_details=this.localstorage.get('gustToken');
  }

  ngOnInit(): void {

  }
  ngDoCheck(): void {
    this.cart=this.cartS.cart;
    if(this.cart.length==0){
      this.rout.navigateByUrl('/guest_panel/available-rooms/hotel-details').then(r => {

      })
    }
  }

  cancelBooking(_id: any) {
    const dialogRef = this.dialog.open(CancelBookingComponent,{
      data:{id:_id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cartS.load_cartDetails(this.guest_details.email);
    });
  }
}

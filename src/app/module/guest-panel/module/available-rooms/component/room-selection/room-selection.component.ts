import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";
import {BookingDataSharesService} from "../../../../../../share/shares_servises/booking-data-shares.service";
import {environment} from "../../../../../../../environments/environment";
import Swal from 'sweetalert2';
import {GuestRegiserComponent} from "../../../../core_guest/guest-regiser/guest-regiser.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-room-selection',
  templateUrl: './room-selection.component.html',
  styleUrls: ['./room-selection.component.scss']
})
export class RoomSelectionComponent implements OnInit,DoCheck{
  Base_server_ip=environment.Base_server_ip;
  selectedRooms:any []=[];
  number: number= 0;
  dateRange:any = {}
  images = [{image:'./assets/imgno.jpg'}];

  constructor(public dataShares:BookingDataSharesService,
              private localStorage:LocalStorageService,
              private router:Router,
              public dialog: MatDialog) {
    //constructor edit here...

  }

  ngOnInit(): void {
  }
  ngDoCheck() {
    this.dateRange=this.dataShares.getDateRange()
    this.selectedRooms=this.dataShares.getRoomDetails();
  }

  openRegister() {
    const dialogRef = this.dialog.open(GuestRegiserComponent, {
      height: 'auto',
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  RoomCheckin(temRoom: any) {
    if(this.localStorage.get('gustToken')===null){
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'If not have a account Please Register firstly',
      }).then(r => {
        this.openRegister();
      })

    }else {
      this.dataShares.roomNumber=temRoom.room_number;
      this.router.navigateByUrl('/guest_panel/booking-selected-room').then(r => {
      })
    }
  }
}

import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LocalStorageService} from "angular-2-local-storage";
import {ActivatedRoute, Router} from "@angular/router";
import {BookingDataSharesService} from "../../../../../../share/shares_servises/booking-data-shares.service";
import {environment} from "../../../../../../../environments/environment";


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

  constructor(public dataShares:BookingDataSharesService, private localStorage:LocalStorageService, private router:Router) {
  }

  ngOnInit(): void {
  }
  ngDoCheck() {
    this.dateRange=this.dataShares.getDateRange()
    this.selectedRooms=this.dataShares.getRoomDetails();
  }

  RoomCheckin(temRoom: any) {
    console.log(this.selectedRooms)
    if(this.localStorage.get('gustToken')===null){
      alert('Please Register');
    }else {
      this.dataShares.roomNumber=temRoom.room_number;
      /*this.dataShares.setSelectedRoomNum(temRoom.room_number);*/
      this.router.navigateByUrl('/guest_panel/booking-selected-room').then(r => {
      })
    }
  }
}

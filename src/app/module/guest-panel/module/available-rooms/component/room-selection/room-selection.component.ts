import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LocalStorageService} from "angular-2-local-storage";
import {ActivatedRoute, Router} from "@angular/router";
import {BookingDataSharesService} from "../../../../../../share/shares_servises/booking-data-shares.service";


@Component({
  selector: 'app-room-selection',
  templateUrl: './room-selection.component.html',
  styleUrls: ['./room-selection.component.scss']
})
export class RoomSelectionComponent implements OnInit,DoCheck{
  selectedRooms:any []=[];
  number: number= 0;
  images = [
    {position:0,url:'./assets/hroom1.jpg'},
    {position:1,url:'./assets/hroom2.jpg'},
    {position:2,url:'./assets/hroom3.jpg'}
  ];

  constructor(public dataShares:BookingDataSharesService, private localStorage:LocalStorageService, private router:Router) {
  }

  ngOnInit(): void {
  }
  ngDoCheck() {
    this.selectedRooms=this.dataShares.getRoomDetails();
  }

  RoomCheckin(temRoom: any) {
    if(this.localStorage.get('gustToken')===null){
      alert('Please Register');
    }else {

      this.dataShares.setSelectedRoom(temRoom.room_number);
        this.router.navigateByUrl('/guest_panel/booking-selected-room').then(r => {
        })
    }
  }
}

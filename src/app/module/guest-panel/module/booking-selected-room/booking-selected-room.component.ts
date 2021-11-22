import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import {BookingDetailsService} from "../../core_guest/servises/booking-details.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "./component/confirmation-dialog/confirmation-dialog.component";

interface Beds {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-booking-selected-room',
  templateUrl: './booking-selected-room.component.html',
  styleUrls: ['./booking-selected-room.component.scss']
})
export class BookingSelectedRoomComponent implements OnInit {
  beds: Beds[] = [
    {value: '1', viewValue: 'No additional beds'},
    {value: '2', viewValue: 'Additional single bed'},
    {value: '3', viewValue: 'Additional double bed'},
  ];
  dateCount=0;
  normalCost=0;
  additionalCost=0;
  totalCost=0;

  selectedRoom:any =[];
  date_range:any;
  guest_details:any =[];

  constructor(private route:ActivatedRoute,private localstorage: LocalStorageService, private service:BookingDetailsService,public dialog: MatDialog) {
    this.guest_details=this.localstorage.get('gustToken');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.selectedRoom=JSON.parse(params.room);
      console.log(this.selectedRoom);
      this.date_range=JSON.parse(params.date);

    });
    this.dateCounts()
    this.normalCost=Number(this.selectedRoom.price_per_night)*this.dateCount;
    this.cost_calculator();
  }

  cost_calculator(){
    this.totalCost=this.normalCost+this.additionalCost;
  }

  calAdditionalCost(data:any) {
    console.log(this.selectedRoom)
    if(String(data)==='1'){
      this.additionalCost=0;
    }else if(String(data)==='2'){
      this.additionalCost=this.normalCost*15/100;
    }else if(String(data)==='3'){
      this.additionalCost=this.normalCost*25/100;
    }
    this.cost_calculator();
  }

  checkIn() {
    this.service.checkIn(
      this.date_range.start,
      this.date_range.end,
      this.guest_details.email,
      this.selectedRoom.room_number,
      this.totalCost
    ).subscribe(response=>{
      /*console.log(response.messages)*/
    },error => {
      /*console.log(error);*/
    })

    this.dialog.open(ConfirmationDialogComponent);

  }

  private dateCounts() {
    const d1=new Date(this.date_range.start);
    const d2=new Date(this.date_range.end);
    this.dateCount=(d2.getTime()-d1.getTime())/(1000 * 3600 * 24);

  }
}

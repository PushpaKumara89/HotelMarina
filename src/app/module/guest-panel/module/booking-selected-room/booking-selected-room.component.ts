import {AfterContentInit, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";
import {BookingDetailsService} from "../../core_guest/servises/booking-details.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "./component/confirmation-dialog/confirmation-dialog.component";
import {CartServicesService} from "../../../../share/shares_servises/cart-services.service";
import {BookingDataSharesService} from "../../../../share/shares_servises/booking-data-shares.service";
import {RoomMnService} from "../../../../core/services/room-mn.service";

interface Beds {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-booking-selected-room',
  templateUrl: './booking-selected-room.component.html',
  styleUrls: ['./booking-selected-room.component.scss']
})
export class BookingSelectedRoomComponent implements OnInit,AfterViewInit,DoCheck {
  beds: Beds[] = [
    {value: '1', viewValue: 'No additional beds'},
    {value: '2', viewValue: 'Additional single bed'},
    {value: '3', viewValue: 'Additional double bed'},
  ];
  dateCount=0;
  normalCost=0;
  additionalCost=0;
  totalCost=0;

  selected_room:any =[];
  start ='';
  end ='';
  guest_details:any =[];

  constructor(public dataShares:BookingDataSharesService,
              private cartS:CartServicesService,
              private localstorage: LocalStorageService,
              private roomS:RoomMnService,
              private service:BookingDetailsService,
              public dialog: MatDialog) {
    this.guest_details=this.localstorage.get('gustToken');


  }
  ngDoCheck() {
    this.selected_room=this.dataShares.getSelectedRoom();
  }

  ngAfterViewInit() {
    /*this.selected_room=this.dataShares.getSelectedRoom();*/
    this.start=this.dataShares.getStart();
    this.end=this.dataShares.getEnd();

    this.dateCounts();
    console.log(this.normalCost*this.dateCount)
    this.normalCost=this.selected_room.price_per_night*this.dateCount;
    this.cost_calculator();
  }

  ngOnInit(): void {

  }

  cost_calculator(){
    this.totalCost=this.normalCost+this.additionalCost;
    console.log(this.selected_room.room_number)
  }

  calAdditionalCost(data:any) {
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
    console.log(this.selected_room.room_number)
    this.service.checkIn(
      new Date(this.start),
      new Date(this.end),
      this.guest_details.email,
      this.selected_room.room_number,
      this.totalCost
    ).subscribe(response=>{
      this.cartS.load_cartDetails(String(this.guest_details.email))
    },error => {
    })

    this.dialog.open(ConfirmationDialogComponent);

  }

  private dateCounts() {
    const d1=new Date(this.start);
    const d2=new Date(this.end);
    this.dateCount=(d2.getTime()-d1.getTime())/(1000 * 3600 * 24)+1;

  }

}

import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookingDetailsService} from "../../../../../../../guest-panel/core_guest/servises/booking-details.service";

@Component({
  selector: 'app-main-context-booking',
  templateUrl: './main-context-booking.component.html',
  styleUrls: ['./main-context-booking.component.scss']
})
export class MainContextBookingComponent implements OnInit,DoCheck{
  imported_id: string |null ='';
  tempBooking:any =[];
  tempRoom :any =[];
  tempGuest: any =[];

  constructor(private activatedRouter: ActivatedRoute,private service:BookingDetailsService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(resp=>{
      if(this.imported_id===resp.get('_id')){
        return;
      }else{
        this.service.getOneBooking(resp.get('_id')).subscribe(response=>{
          this.tempBooking=response.data;
          this.tempRoom=response.data.room;
          this.tempGuest=response.data.guest;
        },error => {
          console.log(error)
        });
        this.imported_id=resp.get('_id')
      }
    },error => {
      console.log(error)
    })
  }

  ngDoCheck(){

  }

}

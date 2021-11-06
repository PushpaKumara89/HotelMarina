import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LocalStorageService} from "angular-2-local-storage";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-room-selection',
  templateUrl: './room-selection.component.html',
  styleUrls: ['./room-selection.component.scss']
})
export class RoomSelectionComponent implements OnInit {
  selectedRooms:any []=[];
  number: number= 0;
  images = [
    {position:0,url:'./assets/hroom1.jpg'},
    {position:1,url:'./assets/hroom2.jpg'},
    {position:2,url:'./assets/hroom3.jpg'}
  ];

  dateRange:any ;

  constructor(private localStorage:LocalStorageService,  public dialog: MatDialog,private route:ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe((params)=>{
      this.selectedRooms=JSON.parse(params.data);
      this.dateRange=JSON.parse(params.date);
    })
  }

  ngOnInit(): void {

  }


  RoomCheckin(temRoom: any) {
    if(this.localStorage.get('gustToken')===null){
      alert('Please Register');
    }else {
      //navigate to Guest cheking
      let tempRoom:any =temRoom;
      let date:any= this.dateRange;

      this.router.navigate(['/guest_panel/booking-selected-room'],{
        queryParams:{room:JSON.stringify(tempRoom),date:JSON.stringify(date)}
      })

    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomMnService} from "../../../../../../../../core/services/room-mn.service";
import {MatDialogRef} from "@angular/material/dialog";

interface Room {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  rooms: Room[] = [
    {value: 'suite-0', viewValue: 'Suite'},
    {value: 'sea-view', viewValue: 'Sea view'}
  ];

  addRoomForm=new FormGroup({
    room_number:new FormControl('',Validators.required),
    room_category:new FormControl('',Validators.required),
    price_pre_night:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
  });

  constructor(private service:RoomMnService,private dialogRef: MatDialogRef<AddRoomComponent>) { dialogRef.disableClose = true;}

  ngOnInit(): void {
  }


  addRoom() {
    this.service.addRoom(
      this.addRoomForm.get('room_number')?.value,
      this.addRoomForm.get('room_category')?.value,
      this.addRoomForm.get('price_pre_night')?.value,
      this.addRoomForm.get('description')?.value
    ).subscribe(response=>{
      alert(response.massage);
    },error => {
      console.log(error);
    });
  }
}

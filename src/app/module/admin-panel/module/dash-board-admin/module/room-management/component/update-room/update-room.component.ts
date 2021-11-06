import {Component, Inject, OnInit} from '@angular/core';
import {RoomMnService} from "../../../../../../../../core/services/room-mn.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface Room {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {
  updateRoomForm=new FormGroup({
    room_number:new FormControl('',Validators.required),
    room_category:new FormControl('',Validators.required),
    price_pre_night:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
  });


  rooms: Room[] = [
    {value: 'suite-0', viewValue: 'Suite'},
    {value: 'sea-view-0', viewValue: 'Sea view'}
  ];


  constructor(private service:RoomMnService,private dialogRef: MatDialogRef<UpdateRoomComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
  }


  ngOnInit(): void {
    this.updateRoomForm.patchValue(this.data);
    console.log(this.updateRoomForm);
  }

  updateRoom(price_pre_night:string) {
    if(price_pre_night==''){
      alert('Please Enter Price ...');
      return;
    }
    this.service.updateRoom(
      this.updateRoomForm.get('room_number')?.value,
      this.updateRoomForm.get('room_category')?.value,
      this.updateRoomForm.get('price_pre_night')?.value,
      this.updateRoomForm.get('description')?.value,

    ).subscribe(response=>{
      alert(response.massage);
    },error => {
      console.log(error);
    });
  }

}

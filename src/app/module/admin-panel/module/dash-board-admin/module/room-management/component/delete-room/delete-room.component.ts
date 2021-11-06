import { Component, OnInit ,Inject} from '@angular/core';
import {RoomMnService} from "../../../../../../../../core/services/room-mn.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.scss']
})
export class DeleteRoomComponent implements OnInit {
  constructor(private service:RoomMnService,@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }


  deleteRoom(roomNo:string){
    this.service.deleteRoom(roomNo).subscribe(response=>{
      console.log(response);
      alert(response.massage);
    },error => {
      console.log(error);
    })
  }

}

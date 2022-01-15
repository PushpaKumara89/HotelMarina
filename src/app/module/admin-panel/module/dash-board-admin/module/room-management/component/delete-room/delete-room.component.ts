import { Component, OnInit ,Inject} from '@angular/core';
import {RoomMnService} from "../../../../../../../../core/services/room-mn.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ImageServiceService} from "../../../../../../../../core/services/image-service.service";

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.scss']
})
export class DeleteRoomComponent implements OnInit {
  img:any []=[];
  constructor(private imgS:ImageServiceService, private service:RoomMnService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.img=data.img;
  }

  ngOnInit(): void {
  }


  deleteRoom(roomNo:string){
    this.service.deleteRoom(roomNo).subscribe(response=>{
      if(response.status===true){
        for (let i = 0; i < this.img.length; i++) {
          this.imgS.deleteImg(this.img[i]).subscribe(resp=>{
            console.log(resp);
          })
        }
      }
      alert(response.massage);

    },error => {
      console.log(error);
    })
  }

}

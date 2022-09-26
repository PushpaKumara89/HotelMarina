import { Injectable } from '@angular/core';
import {RoomMnService} from "../../core/services/room-mn.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoomDataService {
  room:any =[];
  constructor(private roomService:RoomMnService, private router:Router) {}

  public navRoomProfile(num:string){
    let data= {room:num};
    sessionStorage.setItem("room",JSON.stringify(data));
    this.router.navigateByUrl("/admin_panel/dashBoard-admin/room_profile").then(r => {})
  }


  getRoomData(): any{
    const item = sessionStorage.getItem("room");
      if(item){
        return JSON.parse(item).room;
      }
  }

}

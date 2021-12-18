import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dash-board-admin',
  templateUrl: './dash-board-admin.component.html',
  styleUrls: ['./dash-board-admin.component.scss']
})
export class DashBoardAdminComponent implements OnInit {
  opened=false;
  userDetails:any =[];

  constructor(private localstorage:LocalStorageService,private router:Router) {
    if(this.localstorage.get('adminToken')===null){
      router.navigateByUrl('/admin_panel').then(r=>{

      });
    }else {
      this.userDetails=this.localstorage.get('adminToken');
    }
  }

  ngOnInit(): void {
  }
}

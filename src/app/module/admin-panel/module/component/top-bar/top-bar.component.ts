import { Component, OnInit } from '@angular/core';
import {DashBoardAdminComponent} from "../../dash-board-admin/dash-board-admin.component";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private das: DashBoardAdminComponent,private localstorage: LocalStorageService,private router:Router) { }

  ngOnInit(): void {
  }
  opened(){
    this.das.opened=!this.das.opened;
  }
  logOut() {
    this.localstorage.remove('adminToken');
    this.localstorage.clearAll();
    this.router.navigateByUrl('/admin_panel')
  }
}

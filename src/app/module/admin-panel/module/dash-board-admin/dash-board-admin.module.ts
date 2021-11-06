import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardAdminRoutingModule } from './dash-board-admin-routing.module';
import { DashBoardAdminComponent } from './dash-board-admin.component';
import {AdminPanelModule} from "../../admin-panel.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    DashBoardAdminComponent
  ],
  imports: [
    CommonModule,
    DashBoardAdminRoutingModule,
    AdminPanelModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DashBoardAdminModule { }

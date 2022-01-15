import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomManagementRoutingModule } from './room-management-routing.module';
import { RoomManagementComponent } from './room-management.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import { AddRoomComponent } from './component/add-room/add-room.component';
import { DeleteRoomComponent } from './component/delete-room/delete-room.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { UpdateRoomComponent } from './component/update-room/update-room.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    RoomManagementComponent,
    AddRoomComponent,
    DeleteRoomComponent,
    UpdateRoomComponent
  ],
  imports: [
    CommonModule,
    RoomManagementRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class RoomManagementModule { }

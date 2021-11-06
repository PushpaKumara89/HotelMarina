import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingSelectedRoomRoutingModule } from './booking-selected-room-routing.module';
import { BookingSelectedRoomComponent } from './booking-selected-room.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    BookingSelectedRoomComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    BookingSelectedRoomRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class BookingSelectedRoomModule { }

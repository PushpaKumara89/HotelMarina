import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestDetailsRoutingModule } from './guest-details-routing.module';
import { GuestDetailsComponent } from './guest-details.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { CancelBookingComponent } from './component/cancel-booking/cancel-booking.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    GuestDetailsComponent,
    CancelBookingComponent
  ],
  imports: [
    CommonModule,
    GuestDetailsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class GuestDetailsModule { }

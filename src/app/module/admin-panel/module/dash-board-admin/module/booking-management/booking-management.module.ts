import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingManagementRoutingModule } from './booking-management-routing.module';
import { BookingManagementComponent } from './booking-management.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { MainContextBookingComponent } from './component/main-context-booking/main-context-booking.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BookingManagementComponent,
    MainContextBookingComponent
  ],
    imports: [
        CommonModule,
        BookingManagementRoutingModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule
    ]
})
export class BookingManagementModule { }

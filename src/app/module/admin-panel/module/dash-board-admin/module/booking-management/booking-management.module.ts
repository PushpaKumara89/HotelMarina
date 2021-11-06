import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingManagementRoutingModule } from './booking-management-routing.module';
import { BookingManagementComponent } from './booking-management.component';


@NgModule({
  declarations: [
    BookingManagementComponent
  ],
  imports: [
    CommonModule,
    BookingManagementRoutingModule
  ]
})
export class BookingManagementModule { }

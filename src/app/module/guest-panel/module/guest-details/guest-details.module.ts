import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestDetailsRoutingModule } from './guest-details-routing.module';
import { GuestDetailsComponent } from './guest-details.component';


@NgModule({
  declarations: [
    GuestDetailsComponent
  ],
  imports: [
    CommonModule,
    GuestDetailsRoutingModule
  ]
})
export class GuestDetailsModule { }

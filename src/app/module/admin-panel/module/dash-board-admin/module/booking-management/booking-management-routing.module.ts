import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingManagementComponent } from './booking-management.component';
import {MainContextBookingComponent} from "./component/main-context-booking/main-context-booking.component";

const routes: Routes = [{ path: '', component: BookingManagementComponent,children:[
    {path:'upcoming_booking/:_id',component:MainContextBookingComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingManagementRoutingModule { }

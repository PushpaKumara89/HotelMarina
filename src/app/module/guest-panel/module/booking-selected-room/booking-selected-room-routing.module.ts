import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSelectedRoomComponent } from './booking-selected-room.component';

const routes: Routes = [{ path: '', component: BookingSelectedRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingSelectedRoomRoutingModule { }

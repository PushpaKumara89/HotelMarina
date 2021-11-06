import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableRoomsComponent } from './available-rooms.component';
import {RoomSelectionComponent} from "./component/room-selection/room-selection.component";
import {HotelDetailsComponent} from "./component/hotel-details/hotel-details.component";

const routes: Routes = [
  { path: '', redirectTo:'/guest_panel/available-rooms/hotel-details',pathMatch:'full'},
  { path: '', component: AvailableRoomsComponent,children:[
      { path: '', redirectTo:'/guest_panel/available-rooms/hotel-details',pathMatch:'full'},
      { path: 'hotel-details', component: HotelDetailsComponent},
      { path: 'room-selection', component: RoomSelectionComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailableRoomsRoutingModule { }

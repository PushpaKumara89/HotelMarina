import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuestPanelComponent} from './guest-panel.component';

const routes: Routes = [
  {path: '', redirectTo: '/guest_panel/available-rooms', pathMatch: 'full'},
  {
    path: '', component: GuestPanelComponent, children: [
      {
        path: 'available-rooms',
        loadChildren: () => import('./module/available-rooms/available-rooms.module').then(m => m.AvailableRoomsModule)
      },
      {
        path: 'booking-selected-room',
        loadChildren: () => import('./module/booking-selected-room/booking-selected-room.module').then(m => m.BookingSelectedRoomModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestPanelRoutingModule {
}

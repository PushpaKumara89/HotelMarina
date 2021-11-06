import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardAdminComponent } from './dash-board-admin.component';

const routes: Routes = [
  { path: '', component: DashBoardAdminComponent,children:[
      { path: 'room-management', loadChildren: () => import('./module/room-management/room-management.module').then(m => m.RoomManagementModule) },
      { path: 'booking-management', loadChildren: () => import('./module/booking-management/booking-management.module').then(m => m.BookingManagementModule) },
      { path: 'checkoutandpayment', loadChildren: () => import('./module/check-outand-payment/check-outand-payment.module').then(m => m.CheckOutandPaymentModule) }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardAdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./module/component/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'',redirectTo:'/guest_panel/available-rooms/hotel-details',pathMatch:'full'},
  { path: 'admin_panel', loadChildren: () => import('./module/admin-panel/admin-panel.module').then(m => m.AdminPanelModule) },
  { path: 'guest_panel', loadChildren: () => import('./module/guest-panel/guest-panel.module').then(m => m.GuestPanelModule)},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

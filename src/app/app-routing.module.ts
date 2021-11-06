import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/guest_panel',pathMatch:'full'},
  { path: 'adminpanel', loadChildren: () => import('./module/admin-panel/admin-panel.module').then(m => m.AdminPanelModule) },
  { path: 'guest_panel', loadChildren: () => import('./module/guest-panel/guest-panel.module').then(m => m.GuestPanelModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

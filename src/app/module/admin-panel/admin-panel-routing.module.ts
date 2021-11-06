import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationContextComponent} from "./core/administration-auth/authentication-context/authentication-context.component";
import {LoginComponent} from "./core/administration-auth/login/login.component";
import {SignUpComponent} from "./core/administration-auth/sign-up/sign-up.component";

const routes: Routes = [
  {path:'',redirectTo:'/adminpanel/login-admin',pathMatch:'full'},
  { path: '', component: AuthenticationContextComponent,children:[
      {path:'',redirectTo:'/adminpanel/login-admin',pathMatch:'full'},
      {path:'login-admin',component:LoginComponent},
      {path:'sign-up-admin',component:SignUpComponent}
    ]},
  { path: 'dashBoard-admin', loadChildren: () => import('./module/dash-board-admin/dash-board-admin.module').then(m => m.DashBoardAdminModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }

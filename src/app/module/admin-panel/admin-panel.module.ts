import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import {AdminPanelComponent} from './admin-panel.component';
import {AuthenticationContextComponent} from './core/administration-auth/authentication-context/authentication-context.component';
import {SignUpComponent} from './core/administration-auth/sign-up/sign-up.component';
import {LoginComponent} from './core/administration-auth/login/login.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TopBarComponent} from './module/component/top-bar/top-bar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    AdminPanelComponent,
    AuthenticationContextComponent,
    SignUpComponent,
    LoginComponent,
    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class AdminPanelModule {
}

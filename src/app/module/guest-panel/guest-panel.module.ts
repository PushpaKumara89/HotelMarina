import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GuestPanelRoutingModule} from './guest-panel-routing.module';
import {GuestPanelComponent} from './guest-panel.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {TopbarComponent} from './component/topbar/topbar.component';
import {AvailableRoomsModule} from "./module/available-rooms/available-rooms.module";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {GuestRegiserComponent} from './core_guest/guest-regiser/guest-regiser.component';
import {GuestSignInComponent} from './core_guest/guest-sign-in/guest-sign-in.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    GuestPanelComponent,
    TopbarComponent,
    GuestRegiserComponent,
    GuestSignInComponent
  ],
  imports: [
    CommonModule,
    GuestPanelRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    AvailableRoomsModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class GuestPanelModule {
}

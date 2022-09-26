import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomProfileRoutingModule } from './room-profile-routing.module';
import { RoomProfileComponent } from './room-profile.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RoomProfileComponent
  ],
    imports: [
        CommonModule,
        RoomProfileRoutingModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class RoomProfileModule { }

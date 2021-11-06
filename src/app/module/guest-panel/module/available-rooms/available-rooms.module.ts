import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailableRoomsRoutingModule } from './available-rooms-routing.module';
import { AvailableRoomsComponent } from './available-rooms.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { RoomSelectionComponent } from './component/room-selection/room-selection.component';
import { HotelDetailsComponent } from './component/hotel-details/hotel-details.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AngularFileUploaderModule} from "angular-file-uploader";
import {FileUploadModule} from "ng2-file-upload";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AvailableRoomsComponent,
    RoomSelectionComponent,
    HotelDetailsComponent
  ],
  exports: [
    AvailableRoomsComponent
  ],
    imports: [
        CommonModule,
        AvailableRoomsRoutingModule,
        MatDatepickerModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        AngularFileUploaderModule,
        FormsModule,
        FileUploadModule,
        MatInputModule
    ]
})
export class AvailableRoomsModule { }

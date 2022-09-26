import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomProfileComponent } from './room-profile.component';

const routes: Routes = [{ path: '', component: RoomProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomProfileRoutingModule { }

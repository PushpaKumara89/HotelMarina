import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestDetailsComponent } from './guest-details.component';

const routes: Routes = [{ path: '', component: GuestDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestDetailsRoutingModule { }

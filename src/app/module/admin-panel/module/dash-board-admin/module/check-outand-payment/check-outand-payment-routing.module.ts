import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutandPaymentComponent } from './check-outand-payment.component';

const routes: Routes = [{ path: '', component: CheckOutandPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckOutandPaymentRoutingModule { }

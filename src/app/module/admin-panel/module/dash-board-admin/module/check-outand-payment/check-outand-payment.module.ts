import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutandPaymentRoutingModule } from './check-outand-payment-routing.module';
import { CheckOutandPaymentComponent } from './check-outand-payment.component';


@NgModule({
  declarations: [
    CheckOutandPaymentComponent
  ],
  imports: [
    CommonModule,
    CheckOutandPaymentRoutingModule
  ]
})
export class CheckOutandPaymentModule { }

import {Component, DoCheck, OnInit} from '@angular/core';
import {CartServicesService} from "../../../../share/shares_servises/cart-services.service";

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.scss']
})
export class GuestDetailsComponent implements OnInit,DoCheck {
  cart:any =[];
  constructor(private cartS:CartServicesService) { }

  ngOnInit(): void {

  }
  ngDoCheck(): void {
    this.cart=this.cartS.cart;
  }

}

import {Injectable} from '@angular/core';
import {BookingDetailsService} from "../../module/guest-panel/core_guest/servises/booking-details.service";

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  private _cart:any []=[];
  constructor(private bookingService:BookingDetailsService) {
  }

  get cart(): any[] {
    return this._cart;

  }

  set cart(value: any[]) {
    this._cart = value;
  }

  public load_cartDetails(s:string) {
      this.bookingService.getCart(s).subscribe(response=>{
        this.cart=response.data;
      })
  }

}

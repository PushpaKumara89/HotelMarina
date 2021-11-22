import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {
  url = environment.BaseUrl;

  constructor(private http: HttpClient) {
  }

  public checkIn(start_date: string, end_date: string, guest_email: string, room_number: string, cost: number): Observable<any> {
    return this.http.post(this.url + '/booking/checkin', {
      start_date: start_date,
      end_date: end_date,
      email: guest_email,
      room_number: room_number,
      cost: cost
    })
  }

  public getAllBooking(): Observable<any> {
    return this.http.get(this.url + '/booking/getAllBookings');
  }

  public getOneBooking(id:string|null):Observable<any>{
    return this.http.get(this.url + '/booking/getA_bookings',{
      headers:{_id:String(id)}
    })
  }

}

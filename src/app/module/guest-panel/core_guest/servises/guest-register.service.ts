import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuestRegisterService {
  url = environment.BaseUrl;

  constructor(private http: HttpClient) {
  }

  public register(name: string, contact_number: string, address: string, email: string, password: string): Observable<any> {
    return this.http.post(this.url + '/guest/register', {
      name: name,
      contact_number: contact_number,
      address: address,
      email: email,
      password: password

      //do not pass variable like roomNumber,pricePreNight
    });
  }


  public signIn(email: string, password: string): Observable<any> {
    return this.http.get(this.url + '/guest/signIn', {

      headers: {email: email, password: password}

    });
  }
}

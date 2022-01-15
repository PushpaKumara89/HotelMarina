import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {FormControl, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.BaseUrl;

  constructor(private http: HttpClient) {
  }

  public signUp(user_name: string, contact: string, email: string, password: string,avatar:object): Observable<any> {
    return this.http.post(this.url + '/user/singUp', {
      user_name: user_name,
      contact: contact,
      email: email,
      password: password,
      avatar:avatar
    })
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.get(this.url + '/user/login', {
      headers: {email: email, password: password}
    })
  }
}

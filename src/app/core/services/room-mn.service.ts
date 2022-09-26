import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomMnService {

  url = environment.BaseUrl;

  constructor(private http: HttpClient) {
  }

  public addRoom(room_number: string, category: string, price: string, description: string): Observable<any> {
    return this.http.post(this.url + '/room/addRoom', {
      room_number: room_number,
      room_category: category,
      price_per_night: Number(price),
      description: description
      //do not pass variable like roomNumber,pricePreNight
    })
  }


  public deleteRoom(roomNumber: string): Observable<any> {
    return this.http.delete(this.url + '/room/deleteRoom', {
      headers: {room_number: roomNumber}
    })
  }
  public searchRoom(roomNumber: string): Observable<any> {
    return this.http.get(this.url + '/room/searchRoom', {
      headers: {room_number: roomNumber}
    })
  }


  public getAllRoom(): Observable<any> {
    return this.http.get(this.url + '/room/getAllRoom');
  }

  public updateRoom(room_number: string, category: string, price: string, description: string): Observable<any> {
    return this.http.put(this.url + '/room/updateRoom', {
      room_number: room_number,
      room_category: category,
      price_per_night: Number(price),
      description: description,

    })
  }
  public uploadImage(image:any,room_number: string): Observable<any> {
    return this.http.put(this.url + '/room/saveRoomImages', {
      room_number: room_number,
      image: image
    })
  }

}

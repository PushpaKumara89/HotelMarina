import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  url='http://localhost:3000/api/v1/imageupload/singlupload'

  constructor(private http :HttpClient) {}



}

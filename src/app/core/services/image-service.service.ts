import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  url=environment.BaseUrl;

  constructor(private http: HttpClient) {
  }

  public singleUpload(event: any): Observable<any> {
    const file = event.target.files[0];
    console.log(file);
    const formdata = new FormData();
    formdata.append('single',file)

    return this.http.post(this.url+'/imageupload/singlupload',formdata);
  }

  uploadMultiple(event: any) {
    const files:FileList = event.target.files;

    const formdata = new FormData();

    for (let i = 0; i < files.length; i++) {
      const element = files[i];
      formdata.append('array',element)
    }

    return this.http.post(this.url+'/imageupload/multipulImage',formdata);
  }

  deleteImg(img: string) {
    return this.http.delete(this.url+'/fileDelete',{
      headers:{file_names: img}
    });
  }
}

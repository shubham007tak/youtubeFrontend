import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient, private toastr: ToastrService) {
  }
  // private url = 'http://localhost:3000';
  private url = 'http://youtubeapi.takgranites.com';

  downloadFile(file: String) {
    // tslint:disable-next-line:prefer-const
    let body = {filename: file};

    return this.http.post(`${this.url}/api/v1/issue/file/download`, body, {
        responseType : 'blob',
        headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
}


public getAllIsps(): Observable<any> {
  return this.http.get(`${this.url}/api/v1/isps/view/all`);
}


}

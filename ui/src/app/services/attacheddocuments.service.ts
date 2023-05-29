import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AttacheddocumentsService {

  constructor(private _http: HttpClient) { }

  saveAttachedDocuments(data: any): Observable<any> {
    console.log("save attached documents detail call to api");
    return this._http.post('http://localhost:8082/api/attacheddocuments', data);
  }
}

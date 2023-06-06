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

  updateAttachedDocuments(id: any, data: any) : Observable<any>{
    console.log("call to update attached documents api");
    return this._http.put(`http://localhost:8082/api/attacheddocuments/${id}`,data);
  }

  getDocumentsByApplicationDetailId(applicationdetailid: any) : Observable<any>{
    console.log('call to get attached documents by application detail id');
    return this._http.get(`http://localhost:8082/api/attacheddocuments/byappdetail/${applicationdetailid}`);
  }
}

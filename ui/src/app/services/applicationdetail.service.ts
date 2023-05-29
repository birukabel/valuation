import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationdetailService {

  constructor(private _http: HttpClient) {}

  getValuationApplicationDetailByApplicantName(applicantname: any):Observable<any>{
    return this._http.get(`http://localhost:8082/api/applicationdetail/byname/${applicantname}`);
  }

  updateValuationApplication(id: number, data: any):Observable<any>{
    return this._http.put(`http://localhost:8082/api/applicationdetail/${id}`,data);
  }
}

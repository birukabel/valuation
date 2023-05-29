import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValuationService {

  constructor(private _http: HttpClient) {}

  saveValuation(data: any): Observable<any> {
    console.log("save valuation call to api");
    return this._http.post('http://localhost:8082/api/valuationapplication', data);
  }

  getValuationApplication(): Observable<any> {
    return this._http.get('http://localhost:8082/api/valuationapplication/');
  }

  updateValuation(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8082/api/valuationapplication/${id}`, data);
  }

  saveValuationApplicationDetail(data: any):Observable<any> {
    console.log("save application detail api called");
    return this._http.post('http://localhost:8082/api/applicationdetail/', data);
  }

  saveValuationApplicationDetailStatus(data: any):Observable<any>{
    console.log('save application detail status api called');
    return this._http.post('http://localhost:8082/api/applicationdetailstatus',data);
  }

}

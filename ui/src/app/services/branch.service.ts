import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from '../models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private _http: HttpClient) {}

  getAllBranchs(): Observable<Branch[]> {
    return this._http.get<Branch[]>('http://localhost:8082/api/branch/');
  }

  getBranchsByDistrict(districtname: any):Observable<Branch[]>{
    return this._http.get<Branch[]>(`http://localhost:8082/api/branch/bydistrict/${districtname}`);
  }
}

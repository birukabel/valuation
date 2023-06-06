import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { District } from '../models/district.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private _http: HttpClient) {}

  getAllDistricts():Observable<District[]>{
    return this._http.get<District[]>('http://localhost:8082/api/district/');
  }
}

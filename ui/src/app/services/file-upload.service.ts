import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8082/api';
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    //formData.append('description', 'valuation file');
    formData.append('filetoupload', file);
    sessionStorage.setItem('filename',file.name);
    //console.log(sessionStorage.getItem('filename'));

    const req = new HttpRequest('POST', `${this.baseUrl}/fileupload/uploadfile2`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    //console.log('call to api upload');
    //console.log(req);

    return this.http.request(req);
  }


  upload2(file: File): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    //formData.append('description', 'valuation file');
    formData.append('filetoupload', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/fileupload/uploadfile3`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    console.log('call to api upload');
    console.log(req);

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fileupload/`);
  }
}

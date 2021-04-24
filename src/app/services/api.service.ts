import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getListData(): Observable<any> {
    return this.httpClient.get('your/url');
  }

  getDetailsData(id: string | number): Observable<any> {
    return this.httpClient.get('your/url');
  }
}

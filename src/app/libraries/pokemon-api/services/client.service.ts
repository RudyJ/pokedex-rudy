import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private http: HttpClient) { }
  
  public getUrl(url: string, params?: any): Observable<any> {
    return this.http.get(url, {
      params: params,
    });
  }
}

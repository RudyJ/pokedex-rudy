import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class TypesService {
  private url_base: string = "https://pokeapi.co/api/v2/type/";

  constructor(private client: ClientService) {}

  public getTypes(): Observable<any> {
    return new Observable((observer) => {
      const url = `${this.url_base}`;
      this.client.getUrl(url).subscribe((data: any) => {
        if (data) {
          observer.next(data);
        }
      });
    });
  }

  public getType(id: number): Observable<any> {
    return new Observable((observer) => {
      const url = `${this.url_base}${id}/`;
      this.client.getUrl(url).subscribe((data: any) => {
        if (data) {
          observer.next(data);
        }
      });
    });
  }

  public getTypeByUrl(url: string): Observable<any> {
    return new Observable((observer) => {
      this.client.getUrl(url).subscribe((data: any) => {
        if (data) {
          observer.next(data);
        }
      });
    });
  }
  
}

import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private url_base: string = "https://pokeapi.co/api/v2/stat/";

  constructor(
    private client: ClientService,
    // private species: SpeciesService,
  ) { }

  public getStats(id: number): Observable<any> {
    return new Observable((observer) => {
      const url = `${this.url_base}${id}/`;
      this.client.getUrl(url).subscribe((data: any) => {
        if (data) {
          observer.next(data);
        }
      });
    });
  }

  public getStatsByUrl(url: string): Observable<any> {
    return new Observable((observer) => {
      this.client.getUrl(url).subscribe((data: any) => {
        if (data) {
          observer.next(data);
        }
      });
    });
  }
}

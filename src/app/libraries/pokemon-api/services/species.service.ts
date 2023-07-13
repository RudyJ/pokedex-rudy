import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class SpeciesService {
  private base: string = "https://pokeapi.co/api/v2/pokemon-species/";

  constructor(private client: ClientService) {}

  public getSpecies(id: number): Observable<any> {
    return new Observable((observer) => {
      const url = `${this.base}${id}/`;
      this.client.getUrl(url).subscribe((data: any) => {
        if (data) {
          observer.next(data);
        }
      });
    });
  }

  public getSpeciesByUrl(url: string): Observable<any> {
    return new Observable((observer) => {
      this.client.getUrl(url).subscribe((data: any) => {
        if (data) {
          observer.next(data);
        }
      });
    });
  }
}

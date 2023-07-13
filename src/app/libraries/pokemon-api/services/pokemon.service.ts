import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { Observable } from 'rxjs';
import { SpeciesService } from './species.service';
import { StatsService } from './stats.service';
import { TypesService } from './types.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public limit: number = 300;
  public offset: number = 0;

  constructor(private client: ClientService, private species: SpeciesService, private statsService: StatsService, private typesServic: TypesService) { }

  public setLimit(limit: number): void {
    this.limit = limit;
  }

  public setOffset(offset: number): void {
    this.offset = offset;
  }

  public getTotalPokemons(): Observable<any> {
    return new Observable((observer) => {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const params: any = {
        limit: 1,
        offset: 0,
      };
      this.client.getUrl(url, params).subscribe((data: any) => {
        if (data) {
          observer.next(data.count);
        }
      });
    });
  }

  public getAllPokemons(): Observable<any> {
    return new Observable((observer) => {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const params: any = {
        limit: this.limit,
        offset: this.offset
      };
      this.client.getUrl(url, params).subscribe((data: any) => {
        if (data) {
          // console.log(data);
          const results: any = data.results;
          const pokemons: any[] = [];
          results.forEach((pokemon: any, index: number) => {
            this.getPokemon(pokemon.name).subscribe((data: any) => {
              if (data) {
                pokemons.push(data);
                if ((index + 1) === results.length) {
                  observer.next(pokemons);
                }
              }
            });
          });
        }
      });
    });
  }

  public getPokemon(id_or_name: number | string, complete: boolean = false): Observable<any> { 
    if (typeof id_or_name === "string") {
      id_or_name = id_or_name.toLowerCase();
    } else if(typeof id_or_name === "number") {
      id_or_name = id_or_name.toString();
    }
    const url = "https://pokeapi.co/api/v2/pokemon/" + id_or_name;
    return new Observable((observer) => {
      this.client.getUrl(url).subscribe((data: any) => {
        if (data) {
          const pokemon: any = Object.assign({}, data);
          this.species.getSpeciesByUrl(pokemon.species.url).subscribe((data: any) => {
            if (data) {
              pokemon.species = data;

              if (complete) {
                const stats: any = [];
                const qtd_stats: number = pokemon.stats.length;

                pokemon.stats.forEach((stat: any, index: number) => {
                  this.statsService.getStatsByUrl(stat.stat.url).subscribe((data: any) => {
                    if (data) {
                      const new_stat: any = Object.assign({}, stat);
                      new_stat.stat = data;
                      stats.push(new_stat);
                      if ((index + 1) === qtd_stats) {
                        pokemon.stats = stats;

                        const types: any = [];
                        const qtd_types: number = pokemon.types.length;
                        pokemon.types.forEach((type: any, index: number) => {
                          this.typesServic.getTypeByUrl(type.type.url).subscribe((data: any) => {
                            if (data) {
                              const new_type: any = Object.assign({}, type);
                              new_type.type = data;
                              types.push(new_type);
                              if ((index + 1) === qtd_types) {
                                pokemon.types = types;
                                observer.next(pokemon);
                              }
                            }
                          });
                        });

                      }
                    }
                  });
                });
                
              } else {
                observer.next(pokemon);
              }
            }
          });
        }
      });
    });
  }

}

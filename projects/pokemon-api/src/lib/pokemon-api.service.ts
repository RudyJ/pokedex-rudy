import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor() { }

  public getAllPokemons(): any {
    return [
      {
        id: 1
      }
    ];
  }
}

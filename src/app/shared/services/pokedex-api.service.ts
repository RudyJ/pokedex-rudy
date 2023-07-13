import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Observable, catchError, defer, from, map, tap } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class PokedexApiService {
  private endpoints: any = {
    ability: "https://pokeapi.co/api/v2/ability/",
    berry: "https://pokeapi.co/api/v2/berry/",
    "berry-firmness": "https://pokeapi.co/api/v2/berry-firmness/",
    "berry-flavor": "https://pokeapi.co/api/v2/berry-flavor/",
    characteristic: "https://pokeapi.co/api/v2/characteristic/",
    "contest-effect": "https://pokeapi.co/api/v2/contest-effect/",
    "contest-type": "https://pokeapi.co/api/v2/contest-type/",
    "egg-group": "https://pokeapi.co/api/v2/egg-group/",
    "encounter-condition": "https://pokeapi.co/api/v2/encounter-condition/",
    "encounter-condition-value":
      "https://pokeapi.co/api/v2/encounter-condition-value/",
    "encounter-method": "https://pokeapi.co/api/v2/encounter-method/",
    "evolution-chain": "https://pokeapi.co/api/v2/evolution-chain/",
    "evolution-trigger": "https://pokeapi.co/api/v2/evolution-trigger/",
    gender: "https://pokeapi.co/api/v2/gender/",
    generation: "https://pokeapi.co/api/v2/generation/",
    "growth-rate": "https://pokeapi.co/api/v2/growth-rate/",
    item: "https://pokeapi.co/api/v2/item/",
    "item-attribute": "https://pokeapi.co/api/v2/item-attribute/",
    "item-category": "https://pokeapi.co/api/v2/item-category/",
    "item-fling-effect": "https://pokeapi.co/api/v2/item-fling-effect/",
    "item-pocket": "https://pokeapi.co/api/v2/item-pocket/",
    language: "https://pokeapi.co/api/v2/language/",
    location: "https://pokeapi.co/api/v2/location/",
    "location-area": "https://pokeapi.co/api/v2/location-area/",
    machine: "https://pokeapi.co/api/v2/machine/",
    move: "https://pokeapi.co/api/v2/move/",
    "move-ailment": "https://pokeapi.co/api/v2/move-ailment/",
    "move-battle-style": "https://pokeapi.co/api/v2/move-battle-style/",
    "move-category": "https://pokeapi.co/api/v2/move-category/",
    "move-damage-class": "https://pokeapi.co/api/v2/move-damage-class/",
    "move-learn-method": "https://pokeapi.co/api/v2/move-learn-method/",
    "move-target": "https://pokeapi.co/api/v2/move-target/",
    nature: "https://pokeapi.co/api/v2/nature/",
    "pal-park-area": "https://pokeapi.co/api/v2/pal-park-area/",
    "pokeathlon-stat": "https://pokeapi.co/api/v2/pokeathlon-stat/",
    pokedex: "https://pokeapi.co/api/v2/pokedex/",
    pokemon: "https://pokeapi.co/api/v2/pokemon/",
    "pokemon-color": "https://pokeapi.co/api/v2/pokemon-color/",
    "pokemon-form": "https://pokeapi.co/api/v2/pokemon-form/",
    "pokemon-habitat": "https://pokeapi.co/api/v2/pokemon-habitat/",
    "pokemon-shape": "https://pokeapi.co/api/v2/pokemon-shape/",
    "pokemon-species": "https://pokeapi.co/api/v2/pokemon-species/",
    region: "https://pokeapi.co/api/v2/region/",
    stat: "https://pokeapi.co/api/v2/stat/",
    "super-contest-effect": "https://pokeapi.co/api/v2/super-contest-effect/",
    type: "https://pokeapi.co/api/v2/type/",
    version: "https://pokeapi.co/api/v2/version/",
    "version-group": "https://pokeapi.co/api/v2/version-group/",
  };

  private instance!: AxiosInstance;
  private qtdPokemons: number = 300;

  constructor() {
    this.instance = axios.create();
  }

  public transformInObservable(promise: Promise<any>): Observable<any> {
    return defer(() =>
      from(promise).pipe(
        tap(() => console.log("request sent")),
        map((response: AxiosResponse) => {
          // console.log('response', response);
          if (response.status === 200) {
            return response.data;
          }
        }),
        catchError((error: any) => {
          console.log("error", error);
          return error;
        })
      )
    );
  }

  public listarPokemons(): Observable<any> {
    return this.transformInObservable(
      axios.get(this.endpoints.pokemon, {
        params: {
          limit: 300,
          language: "pt-BR",
        },
      })
    ).pipe(
      map((item) =>
        item.results.map((pokemon: any, index: number) => {
          pokemon.photo =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
            (index + 1) +
            ".png";
          return pokemon;
        })
      )
    );
  }

  public async buscarPokemon(id: number) {
    return await axios.get(this.endpoints.pokemon + id, {
      params: {
        language: "pt-BR",
      },
    });
  }

  public async buscarEspecieByURl(url: string) {
    return await axios.get(url, {
      params: {
        language: "pt-BR",
      },
    });
  }

  public buscarEspecieByURlSync(url: string) {
    return axios.get(url, {
      params: {
        language: "pt-BR",
      },
    });
  }

  public listarTodosPokemons() {
    return new Observable((observer) => {
      const pokemons: any = [];
      for (let i = 1; i <= this.qtdPokemons; i++) {
        this.buscarPokemon(i).then(async (pokemon: any) => {
          if (pokemon.status) {
            const data: any = Object.assign({}, pokemon.data);
            data.species = (
              (await this.buscarEspecieByURl(data.species.url)) as any
            ).data;
            pokemons.push(data);
          }
        });
      }

      observer.next(pokemons);
    });
  }

  public buscarPokemonPorId(id: number) {
    return new Observable((observer) => {
      this.buscarPokemon(id).then((pokemon: any) => {
        if (pokemon.status) {
          const data: any = Object.assign({}, pokemon.data);
          this.buscarEspecieByURlSync(data.species.url).then((specie: any) => {
            data.species = specie.data;
            const adjusted_types: any = [];

            for (let t of data.types) {
              this.buscarEspecieByURlSync(t.type.url).then(
                (typeResponse: any) => {
                  adjusted_types.push(typeResponse.data);
                }
              );
            }
            data.types = adjusted_types;
            observer.next(data);
          });
        }
      });
    });
  }
}

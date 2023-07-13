import { Component, OnInit } from '@angular/core';
import { PokedexApiService } from '../../shared/services/pokedex-api.service';
import { PokemonService } from "../../libraries/pokemon-api";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public pokemonsList: any[] = [];
  private _pokemonsList: any[] = [];
  public searchText: string = "";

  constructor(
    private pokedexApiService: PokedexApiService,
    private pokemonService: PokemonService
  ) {
    this.pokemonService.getAllPokemons().subscribe((data: any) => {
      if (data) {
        this._pokemonsList = data.sort((a: any, b: any) => {
          return parseInt(a.order) - parseInt(b.order);
        });
        this.pokemonsList = this._pokemonsList;
        console.log("pokemonApiService", this.pokemonsList);
      }
    });

    this.pokemonService.getTotalPokemons().subscribe((data: any) => {
      if (data) {
        console.log("getTotalPokemons", data);
      }
    });


    // this.pokedexApiService.listarTodosPokemons().subscribe((data: any) => {
    //   console.log(data);
    //   if (data) {
    //     this._pokemonsList = data;
    //     this.pokemonsList = this._pokemonsList;
    //   }
    // });
  }

  ngOnInit() {}

  public filtrar(): void {
    // filtrar por nome
    if (this.searchText) {
      this.pokemonsList = this._pokemonsList.filter((pokemon) =>
        pokemon.name.includes(this.searchText)
      );
    } else {
      this.pokemonsList = this._pokemonsList;
    }
  }
}

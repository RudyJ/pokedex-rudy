import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexApiService } from '../../shared/services/pokedex-api.service';
import { PokemonService } from "../../libraries/pokemon-api";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent implements OnInit {
  public pokemonId!: number;
  public pokemon: any;
  public stats: any;

  public mapaEtiquetaCor: any = {
    normal: "gray",
    fighting: "black",
    flying: "blue",
    poison: "purple",
    ground: "brown",
    rock: "brown",
    bug: "green",
    ghost: "gray",
    steel: "black",
    fire: "red",
    water: "blue",
    grass: "green",
    electric: "yellow",
    psychic: "gray",
    ice: "blue",
    dragon: "red",
    dark: "black",
    fairy: "green",
    unknown: "gray",
    shadow: "gray",
  };

  public mapaCor: any = {
    hp: "red",
    attack: "orange",
    defense: "yellow",
    "special-attack": "green",
    "special-defense": "blue",
    speed: "purple",
  };

  public mapaSigla: any = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    speed: "SPD",
    experience: "EXP",
  };

  public mapaEtiquetaTextoCor: any = {
    red: "white",
    orange: "black",
    yellow: "black",
    green: "white",
    blue: "white",
    purple: "white",
    gray: "white",
    black: "white",
  };

  constructor(
    private activeRouter: ActivatedRoute,
    private pokedex: PokedexApiService,
    private pokemonService: PokemonService,
  ) {
    if (this.activeRouter.snapshot.params["id"]) {
      this.pokemonId = this.activeRouter.snapshot.params["id"];
      console.log(this.pokemonId);
      this.pokemonService.getPokemon(this.pokemonId, true).subscribe((data: any) => {
        if (data) {
          this.pokemon = data;
          this.prepareStats(this.pokemon.stats);
          console.log(this.pokemon);
        }
      });

      // this.pokedex.buscarPokemonPorId(this.pokemonId).subscribe((data: any) => {
      //   if (data) {
      //     this.pokemon = data;
      //     this.prepareStats(this.pokemon.stats);
      //     console.log(this.pokemon);
      //   }
      // });
    }
  }

  ngOnInit() {}

  public getPtBrType(type: any): string {
    return type.filter((t: any) => t.language.name === "pt-br")[0].name;
  }

  public calcPeso(peso: number): string {
    // calcular o peso de hectograma para gramas, mas se for mais de 1000 gramas, calcular para quilogramas
    const pesoEmGramas = peso * 100;
    if (pesoEmGramas > 1000) {
      return (pesoEmGramas / 1000).toFixed(2) + " kg";
    } else {
      return pesoEmGramas + " g";
    }
  }

  public calcAltura(altura: number): string {
    // calcular altura de decímetro para centímetros, mas se for mais de 100 centímetros, calcular para metros
    const alturaEmCentimetros = altura * 10;
    if (alturaEmCentimetros > 100) {
      return (alturaEmCentimetros / 100).toFixed(2) + " m";
    }
    return alturaEmCentimetros + " cm";
  }

  public prepareStats(stats: any): void {
    const statsPrepared: any = [];
    stats.forEach((stat: any) => {
      statsPrepared.push({
        name: stat.stat.name,
        value: stat.base_stat,
        color: this.mapaCor[stat.stat.name],
        textColor: this.mapaEtiquetaTextoCor[this.mapaCor[stat.stat.name]],
        acronym: this.mapaSigla[stat.stat.name.toLowerCase()],
      });
    });
    statsPrepared.push({
      name: "experience",
      value: this.pokemon.base_experience,
      color: "gray",
      textColor: "black",
      acronym: "XP",
    });
    this.stats = statsPrepared;
  }
}

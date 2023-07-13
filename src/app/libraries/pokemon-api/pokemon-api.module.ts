import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from './services/client.service';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { SpeciesService } from './services/species.service';
import { StatsService } from './services/stats.service';
import { TypesService } from './services/types.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    ClientService,
    PokemonService,
    SpeciesService,
    StatsService,
    TypesService,
  ],
})
export class PokemonApiModule {}

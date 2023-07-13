import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PokedexApiService } from './services/pokedex-api.service';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MenuComponent, PokemonCardComponent],
  exports: [MenuComponent, PokemonCardComponent],
  providers: [PokedexApiService],
})
export class SharedModule {}

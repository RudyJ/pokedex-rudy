import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: PokemonComponent }]),
    SharedModule
  ],
  declarations: [PokemonComponent]
})
export class PokemonModule { }

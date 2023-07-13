import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { 
  }

  ngOnInit() {
    // console.log(this.pokemon);
  }

}

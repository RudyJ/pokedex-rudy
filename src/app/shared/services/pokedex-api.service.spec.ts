/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokedexApiService } from './pokedex-api.service';

describe('Service: PokedexApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokedexApiService]
    });
  });

  it('should ...', inject([PokedexApiService], (service: PokedexApiService) => {
    expect(service).toBeTruthy();
  }));
});

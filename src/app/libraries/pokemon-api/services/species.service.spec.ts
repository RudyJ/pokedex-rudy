/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeciesService } from './species.service';

describe('Service: Species', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeciesService]
    });
  });

  it('should ...', inject([SpeciesService], (service: SpeciesService) => {
    expect(service).toBeTruthy();
  }));
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonApiComponent } from './pokemon-api.component';

describe('PokemonApiComponent', () => {
  let component: PokemonApiComponent;
  let fixture: ComponentFixture<PokemonApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonApiComponent]
    });
    fixture = TestBed.createComponent(PokemonApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

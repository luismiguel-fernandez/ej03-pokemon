import { TestBed } from '@angular/core/testing';

import { BdPokemonService } from './bd-pokemon.service';

describe('BdPokemonService', () => {
  let service: BdPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AffichageConsService } from './affichage-cons.service';

describe('AffichageConsService', () => {
  let service: AffichageConsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichageConsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

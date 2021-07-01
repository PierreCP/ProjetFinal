import { TestBed } from '@angular/core/testing';

import { AffichageProdService } from './affichage-prod.service';

describe('AffichageProdService', () => {
  let service: AffichageProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichageProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

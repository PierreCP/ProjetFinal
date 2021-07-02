import { TestBed } from '@angular/core/testing';

import { AffichageAdminService } from './affichage-admin.service';

describe('AffichageAdminService', () => {
  let service: AffichageAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichageAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

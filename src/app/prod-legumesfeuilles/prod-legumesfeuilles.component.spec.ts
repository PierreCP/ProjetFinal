import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLegumesfeuillesComponent } from './prod-legumesfeuilles.component';

describe('ProdLegumesfeuillesComponent', () => {
  let component: ProdLegumesfeuillesComponent;
  let fixture: ComponentFixture<ProdLegumesfeuillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdLegumesfeuillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLegumesfeuillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

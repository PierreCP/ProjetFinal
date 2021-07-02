import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDuMoisComponent } from './produit-du-mois.component';

describe('ProduitDuMoisComponent', () => {
  let component: ProduitDuMoisComponent;
  let fixture: ComponentFixture<ProduitDuMoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitDuMoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitDuMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

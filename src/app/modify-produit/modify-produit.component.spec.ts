import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProduitComponent } from './modify-produit.component';

describe('ModifyProduitComponent', () => {
  let component: ModifyProduitComponent;
  let fixture: ComponentFixture<ModifyProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

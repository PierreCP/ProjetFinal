import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAromatiquesComponent } from './prod-aromatiques.component';

describe('ProdAromatiquesComponent', () => {
  let component: ProdAromatiquesComponent;
  let fixture: ComponentFixture<ProdAromatiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdAromatiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdAromatiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

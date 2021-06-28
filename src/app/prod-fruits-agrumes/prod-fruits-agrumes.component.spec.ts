import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFruitsAgrumesComponent } from './prod-fruits-agrumes.component';

describe('ProdFruitsAgrumesComponent', () => {
  let component: ProdFruitsAgrumesComponent;
  let fixture: ComponentFixture<ProdFruitsAgrumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFruitsAgrumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFruitsAgrumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

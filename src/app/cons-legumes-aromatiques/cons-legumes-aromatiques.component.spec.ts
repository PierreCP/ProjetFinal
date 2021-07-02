import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesAromatiquesComponent } from './cons-legumes-aromatiques.component';

describe('ConsLegumesAromatiquesComponent', () => {
  let component: ConsLegumesAromatiquesComponent;
  let fixture: ComponentFixture<ConsLegumesAromatiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesAromatiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesAromatiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

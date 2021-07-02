import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesChampignonsComponent } from './cons-legumes-champignons.component';

describe('ConsLegumesChampignonsComponent', () => {
  let component: ConsLegumesChampignonsComponent;
  let fixture: ComponentFixture<ConsLegumesChampignonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesChampignonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesChampignonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

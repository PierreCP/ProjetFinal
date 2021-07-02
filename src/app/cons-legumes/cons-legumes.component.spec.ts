import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesComponent } from './cons-legumes.component';

describe('ConsLegumesComponent', () => {
  let component: ConsLegumesComponent;
  let fixture: ComponentFixture<ConsLegumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

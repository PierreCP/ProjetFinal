import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesRacinesComponent } from './cons-legumes-racines.component';

describe('ConsLegumesRacinesComponent', () => {
  let component: ConsLegumesRacinesComponent;
  let fixture: ComponentFixture<ConsLegumesRacinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesRacinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesRacinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

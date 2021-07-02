import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesChouxComponent } from './cons-legumes-choux.component';

describe('ConsLegumesChouxComponent', () => {
  let component: ConsLegumesChouxComponent;
  let fixture: ComponentFixture<ConsLegumesChouxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesChouxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesChouxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

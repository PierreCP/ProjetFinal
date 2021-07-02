import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesSecComponent } from './cons-legumes-sec.component';

describe('ConsLegumesSecComponent', () => {
  let component: ConsLegumesSecComponent;
  let fixture: ComponentFixture<ConsLegumesSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

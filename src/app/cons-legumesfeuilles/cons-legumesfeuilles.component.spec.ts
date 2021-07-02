import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesfeuillesComponent } from './cons-legumesfeuilles.component';

describe('ConsLegumesfeuillesComponent', () => {
  let component: ConsLegumesfeuillesComponent;
  let fixture: ComponentFixture<ConsLegumesfeuillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesfeuillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesfeuillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

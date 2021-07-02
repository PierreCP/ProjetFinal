import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesfruitsComponent } from './cons-legumesfruits.component';

describe('ConsLegumesfruitsComponent', () => {
  let component: ConsLegumesfruitsComponent;
  let fixture: ComponentFixture<ConsLegumesfruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesfruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesfruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

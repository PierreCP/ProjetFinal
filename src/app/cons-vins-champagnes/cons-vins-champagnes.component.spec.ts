import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsVinsChampagnesComponent } from './cons-vins-champagnes.component';

describe('ConsVinsChampagnesComponent', () => {
  let component: ConsVinsChampagnesComponent;
  let fixture: ComponentFixture<ConsVinsChampagnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsVinsChampagnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsVinsChampagnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

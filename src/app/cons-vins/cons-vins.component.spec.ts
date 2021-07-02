import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsVinsComponent } from './cons-vins.component';

describe('ConsVinsComponent', () => {
  let component: ConsVinsComponent;
  let fixture: ComponentFixture<ConsVinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsVinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsVinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

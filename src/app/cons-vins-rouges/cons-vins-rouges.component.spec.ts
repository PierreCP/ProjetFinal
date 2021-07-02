import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsVinsRougesComponent } from './cons-vins-rouges.component';

describe('ConsVinsRougesComponent', () => {
  let component: ConsVinsRougesComponent;
  let fixture: ComponentFixture<ConsVinsRougesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsVinsRougesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsVinsRougesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

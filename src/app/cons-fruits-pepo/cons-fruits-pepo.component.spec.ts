import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsFruitsPepoComponent } from './cons-fruits-pepo.component';

describe('ConsFruitsPepoComponent', () => {
  let component: ConsFruitsPepoComponent;
  let fixture: ComponentFixture<ConsFruitsPepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsFruitsPepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsFruitsPepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

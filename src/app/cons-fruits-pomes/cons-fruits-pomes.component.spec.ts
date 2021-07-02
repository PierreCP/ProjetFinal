import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsFruitsPomesComponent } from './cons-fruits-pomes.component';

describe('ConsFruitsPomesComponent', () => {
  let component: ConsFruitsPomesComponent;
  let fixture: ComponentFixture<ConsFruitsPomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsFruitsPomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsFruitsPomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

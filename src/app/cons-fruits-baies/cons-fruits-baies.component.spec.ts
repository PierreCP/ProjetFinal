import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsFruitsBaiesComponent } from './cons-fruits-baies.component';

describe('ConsFruitsBaiesComponent', () => {
  let component: ConsFruitsBaiesComponent;
  let fixture: ComponentFixture<ConsFruitsBaiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsFruitsBaiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsFruitsBaiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsFruitsDrupesComponent } from './cons-fruits-drupes.component';

describe('ConsFruitsDrupesComponent', () => {
  let component: ConsFruitsDrupesComponent;
  let fixture: ComponentFixture<ConsFruitsDrupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsFruitsDrupesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsFruitsDrupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

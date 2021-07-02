import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsFruitsTropicauxComponent } from './cons-fruits-tropicaux.component';

describe('ConsFruitsTropicauxComponent', () => {
  let component: ConsFruitsTropicauxComponent;
  let fixture: ComponentFixture<ConsFruitsTropicauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsFruitsTropicauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsFruitsTropicauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

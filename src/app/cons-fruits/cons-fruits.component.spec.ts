import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsFruitsComponent } from './cons-fruits.component';

describe('ConsFruitsComponent', () => {
  let component: ConsFruitsComponent;
  let fixture: ComponentFixture<ConsFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

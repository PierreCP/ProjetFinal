import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsFruitsAgrumesComponent } from './cons-fruits-agrumes.component';

describe('ConsFruitsAgrumesComponent', () => {
  let component: ConsFruitsAgrumesComponent;
  let fixture: ComponentFixture<ConsFruitsAgrumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsFruitsAgrumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsFruitsAgrumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

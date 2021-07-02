import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsBieresBlanchesComponent } from './cons-bieres-blanches.component';

describe('ConsBieresBlanchesComponent', () => {
  let component: ConsBieresBlanchesComponent;
  let fixture: ComponentFixture<ConsBieresBlanchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsBieresBlanchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsBieresBlanchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsBieresRoussesComponent } from './cons-bieres-rousses.component';

describe('ConsBieresRoussesComponent', () => {
  let component: ConsBieresRoussesComponent;
  let fixture: ComponentFixture<ConsBieresRoussesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsBieresRoussesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsBieresRoussesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

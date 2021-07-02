import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsBieresComponent } from './cons-bieres.component';

describe('ConsBieresComponent', () => {
  let component: ConsBieresComponent;
  let fixture: ComponentFixture<ConsBieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsBieresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsBieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

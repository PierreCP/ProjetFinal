import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsBieresBrunesComponent } from './cons-bieres-brunes.component';

describe('ConsBieresBrunesComponent', () => {
  let component: ConsBieresBrunesComponent;
  let fixture: ComponentFixture<ConsBieresBrunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsBieresBrunesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsBieresBrunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsVinsBlancsComponent } from './cons-vins-blancs.component';

describe('ConsVinsBlancsComponent', () => {
  let component: ConsVinsBlancsComponent;
  let fixture: ComponentFixture<ConsVinsBlancsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsVinsBlancsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsVinsBlancsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

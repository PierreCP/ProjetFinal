import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsBieresBlondesComponent } from './cons-bieres-blondes.component';

describe('ConsBieresBlondesComponent', () => {
  let component: ConsBieresBlondesComponent;
  let fixture: ComponentFixture<ConsBieresBlondesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsBieresBlondesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsBieresBlondesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

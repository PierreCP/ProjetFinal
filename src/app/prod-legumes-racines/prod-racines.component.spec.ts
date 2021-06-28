import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRacinesComponent } from './prod-racines.component';

describe('ProdRacinesComponent', () => {
  let component: ProdRacinesComponent;
  let fixture: ComponentFixture<ProdRacinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdRacinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdRacinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

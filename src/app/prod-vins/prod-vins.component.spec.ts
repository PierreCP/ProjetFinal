import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdVinsComponent } from './prod-vins.component';

describe('ProdVinsComponent', () => {
  let component: ProdVinsComponent;
  let fixture: ComponentFixture<ProdVinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdVinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdVinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

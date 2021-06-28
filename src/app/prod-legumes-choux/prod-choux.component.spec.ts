import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdChouxComponent } from './prod-choux.component';

describe('ProdChouxComponent', () => {
  let component: ProdChouxComponent;
  let fixture: ComponentFixture<ProdChouxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdChouxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdChouxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

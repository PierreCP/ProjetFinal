import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRougesComponent } from './prod-rouges.component';

describe('ProdRougesComponent', () => {
  let component: ProdRougesComponent;
  let fixture: ComponentFixture<ProdRougesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdRougesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdRougesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

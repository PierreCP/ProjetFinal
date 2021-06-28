import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdChampignonsComponent } from './prod-champignons.component';

describe('ProdChampignonsComponent', () => {
  let component: ProdChampignonsComponent;
  let fixture: ComponentFixture<ProdChampignonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdChampignonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdChampignonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

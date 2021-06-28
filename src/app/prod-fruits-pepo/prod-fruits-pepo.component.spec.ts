import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFruitsPepoComponent } from './prod-fruits-pepo.component';

describe('ProdFruitsPepoComponent', () => {
  let component: ProdFruitsPepoComponent;
  let fixture: ComponentFixture<ProdFruitsPepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFruitsPepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFruitsPepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

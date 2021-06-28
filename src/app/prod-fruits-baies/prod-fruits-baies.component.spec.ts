import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFruitsBaiesComponent } from './prod-fruits-baies.component';

describe('ProdFruitsBaiesComponent', () => {
  let component: ProdFruitsBaiesComponent;
  let fixture: ComponentFixture<ProdFruitsBaiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFruitsBaiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFruitsBaiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

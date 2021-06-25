import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFruitsComponent } from './prod-fruits.component';

describe('ProdFruitsComponent', () => {
  let component: ProdFruitsComponent;
  let fixture: ComponentFixture<ProdFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

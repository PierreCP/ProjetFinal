import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFruitsPomesComponent } from './prod-fruits-pomes.component';

describe('ProdFruitsPomesComponent', () => {
  let component: ProdFruitsPomesComponent;
  let fixture: ComponentFixture<ProdFruitsPomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFruitsPomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFruitsPomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFruitsDrupesComponent } from './prod-fruits-drupes.component';

describe('ProdFruitsDrupesComponent', () => {
  let component: ProdFruitsDrupesComponent;
  let fixture: ComponentFixture<ProdFruitsDrupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFruitsDrupesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFruitsDrupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

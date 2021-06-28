import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFruitsTropicauxComponent } from './prod-fruits-tropicaux.component';

describe('ProdFruitsTropicauxComponent', () => {
  let component: ProdFruitsTropicauxComponent;
  let fixture: ComponentFixture<ProdFruitsTropicauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFruitsTropicauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFruitsTropicauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

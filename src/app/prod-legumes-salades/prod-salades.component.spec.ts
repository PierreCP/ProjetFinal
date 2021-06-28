import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSaladesComponent } from './prod-salades.component';

describe('ProdSaladesComponent', () => {
  let component: ProdSaladesComponent;
  let fixture: ComponentFixture<ProdSaladesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdSaladesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdSaladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

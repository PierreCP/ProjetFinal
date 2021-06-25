import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBieresComponent } from './prod-bieres.component';

describe('ProdBieresComponent', () => {
  let component: ProdBieresComponent;
  let fixture: ComponentFixture<ProdBieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBieresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

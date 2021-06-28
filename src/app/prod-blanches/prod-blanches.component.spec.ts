import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBlanchesComponent } from './prod-blanches.component';

describe('ProdBlanchesComponent', () => {
  let component: ProdBlanchesComponent;
  let fixture: ComponentFixture<ProdBlanchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBlanchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBlanchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

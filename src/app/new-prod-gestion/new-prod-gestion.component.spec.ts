import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProdGestionComponent } from './new-prod-gestion.component';

describe('NewProdGestionComponent', () => {
  let component: NewProdGestionComponent;
  let fixture: ComponentFixture<NewProdGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProdGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProdGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

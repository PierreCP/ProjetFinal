import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProfProdComponent } from './modif-prof-prod.component';

describe('ModifProfProdComponent', () => {
  let component: ModifProfProdComponent;
  let fixture: ComponentFixture<ModifProfProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifProfProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProfProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

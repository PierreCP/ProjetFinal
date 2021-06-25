import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLegumesComponent } from './prod-legumes.component';

describe('ProdLegumesComponent', () => {
  let component: ProdLegumesComponent;
  let fixture: ComponentFixture<ProdLegumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdLegumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLegumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

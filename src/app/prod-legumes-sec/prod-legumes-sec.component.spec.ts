import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLegumesSecComponent } from './prod-legumes-sec.component';

describe('ProdLegumesSecComponent', () => {
  let component: ProdLegumesSecComponent;
  let fixture: ComponentFixture<ProdLegumesSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdLegumesSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLegumesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

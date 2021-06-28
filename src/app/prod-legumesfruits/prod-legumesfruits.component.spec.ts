import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLegumesfruitsComponent } from './prod-legumesfruits.component';

describe('ProdLegumesfruitsComponent', () => {
  let component: ProdLegumesfruitsComponent;
  let fixture: ComponentFixture<ProdLegumesfruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdLegumesfruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLegumesfruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

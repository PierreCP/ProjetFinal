import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRosesComponent } from './prod-roses.component';

describe('ProdRosesComponent', () => {
  let component: ProdRosesComponent;
  let fixture: ComponentFixture<ProdRosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdRosesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdRosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

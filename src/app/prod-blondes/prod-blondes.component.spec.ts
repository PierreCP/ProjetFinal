import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBlondesComponent } from './prod-blondes.component';

describe('ProdBlondesComponent', () => {
  let component: ProdBlondesComponent;
  let fixture: ComponentFixture<ProdBlondesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBlondesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBlondesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

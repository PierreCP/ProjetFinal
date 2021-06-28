import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRoussesComponent } from './prod-rousses.component';

describe('ProdRoussesComponent', () => {
  let component: ProdRoussesComponent;
  let fixture: ComponentFixture<ProdRoussesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdRoussesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdRoussesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

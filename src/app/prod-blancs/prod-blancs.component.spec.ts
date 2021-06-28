import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBlancsComponent } from './prod-blancs.component';

describe('ProdBlancsComponent', () => {
  let component: ProdBlancsComponent;
  let fixture: ComponentFixture<ProdBlancsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBlancsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBlancsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

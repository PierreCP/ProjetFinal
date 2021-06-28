import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdChampagnesComponent } from './prod-champagnes.component';

describe('ProdChampagnesComponent', () => {
  let component: ProdChampagnesComponent;
  let fixture: ComponentFixture<ProdChampagnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdChampagnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdChampagnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

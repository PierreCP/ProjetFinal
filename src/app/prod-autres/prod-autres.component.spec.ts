import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAutresComponent } from './prod-autres.component';

describe('ProdAutresComponent', () => {
  let component: ProdAutresComponent;
  let fixture: ComponentFixture<ProdAutresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdAutresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

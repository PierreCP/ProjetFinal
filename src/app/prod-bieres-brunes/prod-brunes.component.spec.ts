import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBrunesComponent } from './prod-brunes.component';

describe('ProdBrunesComponent', () => {
  let component: ProdBrunesComponent;
  let fixture: ComponentFixture<ProdBrunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBrunesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBrunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

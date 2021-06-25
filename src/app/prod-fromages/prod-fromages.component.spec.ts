import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFromagesComponent } from './prod-fromages.component';

describe('ProdFromagesComponent', () => {
  let component: ProdFromagesComponent;
  let fixture: ComponentFixture<ProdFromagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFromagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFromagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

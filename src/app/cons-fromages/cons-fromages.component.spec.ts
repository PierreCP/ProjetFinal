import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsFromagesComponent } from './cons-fromages.component';

describe('ConsFromagesComponent', () => {
  let component: ConsFromagesComponent;
  let fixture: ComponentFixture<ConsFromagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsFromagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsFromagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesSaladesComponent } from './cons-legumes-salades.component';

describe('ConsLegumesSaladesComponent', () => {
  let component: ConsLegumesSaladesComponent;
  let fixture: ComponentFixture<ConsLegumesSaladesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesSaladesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesSaladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

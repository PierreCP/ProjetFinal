import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLegumesCourgesComponent } from './cons-legumes-courges.component';

describe('ConsLegumesCourgesComponent', () => {
  let component: ConsLegumesCourgesComponent;
  let fixture: ComponentFixture<ConsLegumesCourgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsLegumesCourgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLegumesCourgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

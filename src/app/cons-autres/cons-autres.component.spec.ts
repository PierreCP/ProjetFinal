import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsAutresComponent } from './cons-autres.component';

describe('ConsAutresComponent', () => {
  let component: ConsAutresComponent;
  let fixture: ComponentFixture<ConsAutresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsAutresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

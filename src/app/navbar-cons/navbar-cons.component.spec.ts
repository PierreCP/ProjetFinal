import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConsComponent } from './navbar-cons.component';

describe('NavbarConsComponent', () => {
  let component: NavbarConsComponent;
  let fixture: ComponentFixture<NavbarConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarConsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

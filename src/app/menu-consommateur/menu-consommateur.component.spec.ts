import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConsommateurComponent } from './menu-consommateur.component';

describe('MenuConsommateurComponent', () => {
  let component: MenuConsommateurComponent;
  let fixture: ComponentFixture<MenuConsommateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuConsommateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConsommateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProducteurComponent } from './menu-producteur.component';

describe('MenuProducteurComponent', () => {
  let component: MenuProducteurComponent;
  let fixture: ComponentFixture<MenuProducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuProducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

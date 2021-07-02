import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellesCommandesComponent } from './nouvelles-commandes.component';

describe('NouvellesCommandesComponent', () => {
  let component: NouvellesCommandesComponent;
  let fixture: ComponentFixture<NouvellesCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvellesCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvellesCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

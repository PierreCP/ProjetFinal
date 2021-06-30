import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteEnvoiComponent } from './boite-envoi.component';

describe('BoiteEnvoiComponent', () => {
  let component: BoiteEnvoiComponent;
  let fixture: ComponentFixture<BoiteEnvoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoiteEnvoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteEnvoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

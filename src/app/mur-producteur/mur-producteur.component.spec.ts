import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MurProducteurComponent } from './mur-producteur.component';

describe('MurProducteurComponent', () => {
  let component: MurProducteurComponent;
  let fixture: ComponentFixture<MurProducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MurProducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MurProducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

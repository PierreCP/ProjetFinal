import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProducteurComponent } from './liste-producteur.component';

describe('ListeProducteurComponent', () => {
  let component: ListeProducteurComponent;
  let fixture: ComponentFixture<ListeProducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

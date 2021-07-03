import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieConsComponent } from './messagerie-cons.component';

describe('MessagerieConsComponent', () => {
  let component: MessagerieConsComponent;
  let fixture: ComponentFixture<MessagerieConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagerieConsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerieConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

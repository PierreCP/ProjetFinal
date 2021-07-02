import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtalConsComponent } from './etal-cons.component';

describe('EtalConsComponent', () => {
  let component: EtalConsComponent;
  let fixture: ComponentFixture<EtalConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtalConsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtalConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

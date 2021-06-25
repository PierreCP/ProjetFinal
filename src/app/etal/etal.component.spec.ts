import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtalComponent } from './etal.component';

describe('EtalComponent', () => {
  let component: EtalComponent;
  let fixture: ComponentFixture<EtalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivationComponent } from './admin-activation.component';

describe('AdminActivationComponent', () => {
  let component: AdminActivationComponent;
  let fixture: ComponentFixture<AdminActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

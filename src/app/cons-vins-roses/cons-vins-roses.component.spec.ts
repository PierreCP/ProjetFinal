import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsVinsRosesComponent } from './cons-vins-roses.component';

describe('ConsVinsRosesComponent', () => {
  let component: ConsVinsRosesComponent;
  let fixture: ComponentFixture<ConsVinsRosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsVinsRosesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsVinsRosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

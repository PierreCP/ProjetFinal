import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProfConsComponent } from './modif-prof-cons.component';

describe('ModifProfConsComponent', () => {
  let component: ModifProfConsComponent;
  let fixture: ComponentFixture<ModifProfConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifProfConsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProfConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

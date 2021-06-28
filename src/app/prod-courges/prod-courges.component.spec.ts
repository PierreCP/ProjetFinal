import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCourgesComponent } from './prod-courges.component';

describe('ProdCourgesComponent', () => {
  let component: ProdCourgesComponent;
  let fixture: ComponentFixture<ProdCourgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdCourgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdCourgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

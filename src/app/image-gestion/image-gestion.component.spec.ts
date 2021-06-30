import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGestionComponent } from './image-gestion.component';

describe('ImageGestionComponent', () => {
  let component: ImageGestionComponent;
  let fixture: ComponentFixture<ImageGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

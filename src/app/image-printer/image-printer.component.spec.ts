import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePrinterComponent } from './image-printer.component';

describe('ImagePrinterComponent', () => {
  let component: ImagePrinterComponent;
  let fixture: ComponentFixture<ImagePrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProdUploaderComponent } from './new-prod-uploader.component';

describe('NewProdUploaderComponent', () => {
  let component: NewProdUploaderComponent;
  let fixture: ComponentFixture<NewProdUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProdUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProdUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

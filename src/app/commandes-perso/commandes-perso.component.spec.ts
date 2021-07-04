import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesPersoComponent } from './commandes-perso.component';

describe('CommandesPersoComponent', () => {
  let component: CommandesPersoComponent;
  let fixture: ComponentFixture<CommandesPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesPersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

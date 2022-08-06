import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeCComponent } from './commande-c.component';

describe('CommandeCComponent', () => {
  let component: CommandeCComponent;
  let fixture: ComponentFixture<CommandeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

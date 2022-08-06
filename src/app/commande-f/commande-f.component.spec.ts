import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeFComponent } from './commande-f.component';

describe('CommandeFComponent', () => {
  let component: CommandeFComponent;
  let fixture: ComponentFixture<CommandeFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

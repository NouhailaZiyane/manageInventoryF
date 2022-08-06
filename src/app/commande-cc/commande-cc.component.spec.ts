import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeCCComponent } from './commande-cc.component';

describe('CommandeCCComponent', () => {
  let component: CommandeCCComponent;
  let fixture: ComponentFixture<CommandeCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeCCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

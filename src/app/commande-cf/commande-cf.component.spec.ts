import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeCFComponent } from './commande-cf.component';

describe('CommandeCFComponent', () => {
  let component: CommandeCFComponent;
  let fixture: ComponentFixture<CommandeCFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeCFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

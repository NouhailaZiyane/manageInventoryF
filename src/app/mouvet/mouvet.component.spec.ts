import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvetComponent } from './mouvet.component';

describe('MouvetComponent', () => {
  let component: MouvetComponent;
  let fixture: ComponentFixture<MouvetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouvetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

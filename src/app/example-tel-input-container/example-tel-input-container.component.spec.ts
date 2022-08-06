import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTelInputContainerComponent } from './example-tel-input-container.component';

describe('ExampleTelInputContainerComponent', () => {
  let component: ExampleTelInputContainerComponent;
  let fixture: ComponentFixture<ExampleTelInputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleTelInputContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTelInputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

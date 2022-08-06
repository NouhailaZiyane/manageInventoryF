import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFamilleComponent } from './form-famille.component';

describe('FormFamilleComponent', () => {
  let component: FormFamilleComponent;
  let fixture: ComponentFixture<FormFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFamilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

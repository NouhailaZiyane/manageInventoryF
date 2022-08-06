import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMouvetComponent } from './form-mouvet.component';

describe('FormMouvetComponent', () => {
  let component: FormMouvetComponent;
  let fixture: ComponentFixture<FormMouvetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMouvetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMouvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

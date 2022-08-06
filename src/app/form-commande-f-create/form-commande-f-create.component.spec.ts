import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommandeFCreateComponent } from './form-commande-f-create.component';

describe('FormCommandeFCreateComponent', () => {
  let component: FormCommandeFCreateComponent;
  let fixture: ComponentFixture<FormCommandeFCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommandeFCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommandeFCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

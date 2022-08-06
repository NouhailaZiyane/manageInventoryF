import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEntrepotComponent } from './form-entrepot.component';

describe('FormEntrepotComponent', () => {
  let component: FormEntrepotComponent;
  let fixture: ComponentFixture<FormEntrepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEntrepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEntrepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommandeFComponent } from './form-commande-f.component';

describe('FormCommandeFComponent', () => {
  let component: FormCommandeFComponent;
  let fixture: ComponentFixture<FormCommandeFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommandeFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommandeFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

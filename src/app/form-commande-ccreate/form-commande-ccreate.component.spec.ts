import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommandeCCreateComponent } from './form-commande-ccreate.component';

describe('FormCommandeCCreateComponent', () => {
  let component: FormCommandeCCreateComponent;
  let fixture: ComponentFixture<FormCommandeCCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommandeCCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommandeCCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

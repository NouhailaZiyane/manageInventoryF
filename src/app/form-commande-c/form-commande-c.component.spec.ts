import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommandeCComponent } from './form-commande-c.component';

describe('FormCommandeCComponent', () => {
  let component: FormCommandeCComponent;
  let fixture: ComponentFixture<FormCommandeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommandeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommandeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

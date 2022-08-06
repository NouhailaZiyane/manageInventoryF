import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFournisseursComponent } from './form-fournisseurs.component';

describe('FormFournisseursComponent', () => {
  let component: FormFournisseursComponent;
  let fixture: ComponentFixture<FormFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFournisseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerImageComponent } from './changer-image.component';

describe('ChangerImageComponent', () => {
  let component: ChangerImageComponent;
  let fixture: ComponentFixture<ChangerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

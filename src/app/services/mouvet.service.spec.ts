import { TestBed } from '@angular/core/testing';

import { MouvetService } from './mouvet.service';

describe('MouvetService', () => {
  let service: MouvetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouvetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

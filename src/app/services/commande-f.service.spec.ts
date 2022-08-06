import { TestBed } from '@angular/core/testing';

import { CommandeFService } from './commande-f.service';

describe('CommandeFService', () => {
  let service: CommandeFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

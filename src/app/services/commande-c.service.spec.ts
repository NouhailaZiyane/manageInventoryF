import { TestBed } from '@angular/core/testing';

import { CommandeCService } from './commande-c.service';

describe('CommandeCService', () => {
  let service: CommandeCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

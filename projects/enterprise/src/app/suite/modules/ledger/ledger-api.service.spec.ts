import { TestBed } from '@angular/core/testing';

import { LedgerApiService } from './ledger-api.service';

describe('LedgerApiService', () => {
  let service: LedgerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LedgerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LedgerCalcService } from './ledger-calc.service';

describe('LedgerCalcService', () => {
  let service: LedgerCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LedgerCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BillsCalcService } from './bills-calc.service';

describe('BillsCalcService', () => {
  let service: BillsCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillsCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

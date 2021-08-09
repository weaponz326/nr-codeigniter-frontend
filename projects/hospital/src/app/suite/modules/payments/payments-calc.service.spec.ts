import { TestBed } from '@angular/core/testing';

import { PaymentsCalcService } from './payments-calc.service';

describe('PaymentsCalcService', () => {
  let service: PaymentsCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentsCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

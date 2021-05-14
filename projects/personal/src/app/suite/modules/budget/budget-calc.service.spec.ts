import { TestBed } from '@angular/core/testing';

import { BudgetCalcService } from './budget-calc.service';

describe('BudgetCalcService', () => {
  let service: BudgetCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

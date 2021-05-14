import { TestBed } from '@angular/core/testing';

import { AccountsCalcService } from './accounts-calc.service';

describe('AccountsCalcService', () => {
  let service: AccountsCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

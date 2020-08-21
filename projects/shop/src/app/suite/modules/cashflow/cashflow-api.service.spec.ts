import { TestBed } from '@angular/core/testing';

import { CashflowApiService } from './cashflow-api.service';

describe('CashflowApiService', () => {
  let service: CashflowApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashflowApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

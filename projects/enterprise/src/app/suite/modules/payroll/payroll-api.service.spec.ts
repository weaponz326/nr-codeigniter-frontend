import { TestBed } from '@angular/core/testing';

import { PayrollApiService } from './payroll-api.service';

describe('PayrollApiService', () => {
  let service: PayrollApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

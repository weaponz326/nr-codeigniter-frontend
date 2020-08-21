import { TestBed } from '@angular/core/testing';

import { PayablesApiService } from './payables-api.service';

describe('PayablesApiService', () => {
  let service: PayablesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayablesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

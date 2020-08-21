import { TestBed } from '@angular/core/testing';

import { InvoiceApiService } from './invoice-api.service';

describe('InvoiceApiService', () => {
  let service: InvoiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

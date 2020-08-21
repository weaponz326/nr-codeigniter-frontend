import { TestBed } from '@angular/core/testing';

import { BillsApiService } from './bills-api.service';

describe('BillsApiService', () => {
  let service: BillsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

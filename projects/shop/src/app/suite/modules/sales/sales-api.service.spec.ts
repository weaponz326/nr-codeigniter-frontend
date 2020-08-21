import { TestBed } from '@angular/core/testing';

import { SalesApiService } from './sales-api.service';

describe('SalesApiService', () => {
  let service: SalesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

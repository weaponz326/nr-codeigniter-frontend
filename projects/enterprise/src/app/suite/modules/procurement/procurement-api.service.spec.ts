import { TestBed } from '@angular/core/testing';

import { ProcurementApiService } from './procurement-api.service';

describe('ProcurementApiService', () => {
  let service: ProcurementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcurementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

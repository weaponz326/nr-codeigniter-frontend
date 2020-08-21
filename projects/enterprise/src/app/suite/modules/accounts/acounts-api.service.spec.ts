import { TestBed } from '@angular/core/testing';

import { AcountsApiService } from './acounts-api.service';

describe('AcountsApiService', () => {
  let service: AcountsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcountsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

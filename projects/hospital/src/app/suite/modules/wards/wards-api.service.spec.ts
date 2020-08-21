import { TestBed } from '@angular/core/testing';

import { WardsApiService } from './wards-api.service';

describe('WardsApiService', () => {
  let service: WardsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WardsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

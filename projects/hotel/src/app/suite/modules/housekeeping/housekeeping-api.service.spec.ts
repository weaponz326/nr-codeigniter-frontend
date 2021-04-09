import { TestBed } from '@angular/core/testing';

import { HousekeepingApiService } from './housekeeping-api.service';

describe('HousekeepingApiService', () => {
  let service: HousekeepingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousekeepingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CheckinApiService } from './checkin-api.service';

describe('CheckinApiService', () => {
  let service: CheckinApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

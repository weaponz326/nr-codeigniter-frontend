import { TestBed } from '@angular/core/testing';

import { StaffApiService } from './staff-api.service';

describe('StaffApiService', () => {
  let service: StaffApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

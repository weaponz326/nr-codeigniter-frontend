import { TestBed } from '@angular/core/testing';

import { LeaveApiService } from './leave-api.service';

describe('LeaveApiService', () => {
  let service: LeaveApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

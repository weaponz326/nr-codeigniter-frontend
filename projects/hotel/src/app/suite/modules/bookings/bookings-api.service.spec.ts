import { TestBed } from '@angular/core/testing';

import { BookingsApiService } from './bookings-api.service';

describe('BookingsApiService', () => {
  let service: BookingsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

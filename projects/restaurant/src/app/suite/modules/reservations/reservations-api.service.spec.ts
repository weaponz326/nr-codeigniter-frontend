import { TestBed } from '@angular/core/testing';

import { ReservationsApiService } from './reservations-api.service';

describe('ReservationsApiService', () => {
  let service: ReservationsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

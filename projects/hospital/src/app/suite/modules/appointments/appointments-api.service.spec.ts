import { TestBed } from '@angular/core/testing';

import { AppointmentsApiService } from './appointments-api.service';

describe('AppointmentsApiService', () => {
  let service: AppointmentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

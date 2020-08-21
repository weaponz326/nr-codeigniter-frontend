import { TestBed } from '@angular/core/testing';

import { PrescriptionsApiService } from './prescriptions-api.service';

describe('PrescriptionsApiService', () => {
  let service: PrescriptionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

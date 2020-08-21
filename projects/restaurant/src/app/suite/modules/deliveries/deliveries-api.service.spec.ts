import { TestBed } from '@angular/core/testing';

import { DeliveriesApiService } from './deliveries-api.service';

describe('DeliveriesApiService', () => {
  let service: DeliveriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

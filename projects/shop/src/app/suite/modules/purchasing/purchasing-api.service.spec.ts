import { TestBed } from '@angular/core/testing';

import { PurchasingApiService } from './purchasing-api.service';

describe('PurchasingApiService', () => {
  let service: PurchasingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

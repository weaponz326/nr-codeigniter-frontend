import { TestBed } from '@angular/core/testing';

import { FeesApiService } from './fees-api.service';

describe('FeesApiService', () => {
  let service: FeesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

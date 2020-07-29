import { TestBed } from '@angular/core/testing';

import { GuestPageApiService } from './guest-page-api.service';

describe('GuestPageApiService', () => {
  let service: GuestPageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestPageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ParentsApiService } from './parents-api.service';

describe('ParentsApiService', () => {
  let service: ParentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

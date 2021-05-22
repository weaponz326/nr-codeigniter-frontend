import { TestBed } from '@angular/core/testing';

import { DuesApiService } from './dues-api.service';

describe('DuesApiService', () => {
  let service: DuesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

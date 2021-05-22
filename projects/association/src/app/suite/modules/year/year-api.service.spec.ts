import { TestBed } from '@angular/core/testing';

import { YearApiService } from './year-api.service';

describe('YearApiService', () => {
  let service: YearApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

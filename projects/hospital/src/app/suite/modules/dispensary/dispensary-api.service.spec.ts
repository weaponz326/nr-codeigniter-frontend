import { TestBed } from '@angular/core/testing';

import { DispensaryApiService } from './dispensary-api.service';

describe('DispensaryApiService', () => {
  let service: DispensaryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispensaryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

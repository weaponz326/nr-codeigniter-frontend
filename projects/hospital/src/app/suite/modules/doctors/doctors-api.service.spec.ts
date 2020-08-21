import { TestBed } from '@angular/core/testing';

import { DoctorsApiService } from './doctors-api.service';

describe('DoctorsApiService', () => {
  let service: DoctorsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

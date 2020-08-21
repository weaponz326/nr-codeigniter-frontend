import { TestBed } from '@angular/core/testing';

import { AdmissionsApiService } from './admissions-api.service';

describe('AdmissionsApiService', () => {
  let service: AdmissionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

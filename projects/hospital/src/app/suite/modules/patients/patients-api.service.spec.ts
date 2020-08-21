import { TestBed } from '@angular/core/testing';

import { PatientsApiService } from './patients-api.service';

describe('PatientsApiService', () => {
  let service: PatientsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

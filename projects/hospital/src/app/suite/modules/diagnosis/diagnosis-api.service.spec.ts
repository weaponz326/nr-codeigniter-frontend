import { TestBed } from '@angular/core/testing';

import { DiagnosisApiService } from './diagnosis-api.service';

describe('DiagnosisApiService', () => {
  let service: DiagnosisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

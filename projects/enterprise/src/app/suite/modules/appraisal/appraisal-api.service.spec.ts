import { TestBed } from '@angular/core/testing';

import { AppraisalApiService } from './appraisal-api.service';

describe('AppraisalApiService', () => {
  let service: AppraisalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppraisalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

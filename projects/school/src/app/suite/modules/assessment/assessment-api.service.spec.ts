import { TestBed } from '@angular/core/testing';

import { AssessmentApiService } from './assessment-api.service';

describe('AssessmentApiService', () => {
  let service: AssessmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

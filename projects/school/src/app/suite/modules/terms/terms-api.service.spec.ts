import { TestBed } from '@angular/core/testing';

import { TermsApiService } from './terms-api.service';

describe('TermsApiService', () => {
  let service: TermsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SignupApiService } from './signup-api.service';

describe('SignupApiService', () => {
  let service: SignupApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

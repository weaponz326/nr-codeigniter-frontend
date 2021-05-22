import { TestBed } from '@angular/core/testing';

import { ExecutivesApiService } from './executives-api.service';

describe('ExecutivesApiService', () => {
  let service: ExecutivesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExecutivesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

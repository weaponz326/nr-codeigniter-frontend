import { TestBed } from '@angular/core/testing';

import { WorkersApiService } from './workers-api.service';

describe('WorkersApiService', () => {
  let service: WorkersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NursesApiService } from './nurses-api.service';

describe('NursesApiService', () => {
  let service: NursesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

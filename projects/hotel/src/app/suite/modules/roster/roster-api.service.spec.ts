import { TestBed } from '@angular/core/testing';

import { RosterApiService } from './roster-api.service';

describe('RosterApiService', () => {
  let service: RosterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TimetablesApiService } from './timetables-api.service';

describe('TimetablesApiService', () => {
  let service: TimetablesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimetablesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

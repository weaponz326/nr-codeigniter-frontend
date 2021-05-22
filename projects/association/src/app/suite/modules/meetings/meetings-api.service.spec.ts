import { TestBed } from '@angular/core/testing';

import { MeetingsApiService } from './meetings-api.service';

describe('MeetingsApiService', () => {
  let service: MeetingsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

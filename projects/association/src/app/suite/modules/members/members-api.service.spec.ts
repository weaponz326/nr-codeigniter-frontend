import { TestBed } from '@angular/core/testing';

import { MembersApiService } from './members-api.service';

describe('MembersApiService', () => {
  let service: MembersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

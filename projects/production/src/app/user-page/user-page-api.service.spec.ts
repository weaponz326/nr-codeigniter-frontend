import { TestBed } from '@angular/core/testing';

import { UserPageApiService } from './user-page-api.service';

describe('UserPageApiService', () => {
  let service: UserPageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

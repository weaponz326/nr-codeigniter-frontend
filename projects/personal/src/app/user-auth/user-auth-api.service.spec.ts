import { TestBed } from '@angular/core/testing';

import { UserAuthApiService } from './user-auth-api.service';

describe('UserAuthApiService', () => {
  let service: UserAuthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

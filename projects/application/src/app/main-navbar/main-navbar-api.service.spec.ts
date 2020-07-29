import { TestBed } from '@angular/core/testing';

import { MainNavbarApiService } from './main-navbar-api.service';

describe('MainNavbarApiService', () => {
  let service: MainNavbarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainNavbarApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

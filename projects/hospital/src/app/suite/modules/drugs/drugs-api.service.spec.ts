import { TestBed } from '@angular/core/testing';

import { DrugsApiService } from './drugs-api.service';

describe('DrugsApiService', () => {
  let service: DrugsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

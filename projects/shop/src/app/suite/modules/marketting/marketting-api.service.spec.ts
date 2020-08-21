import { TestBed } from '@angular/core/testing';

import { MarkettingApiService } from './marketting-api.service';

describe('MarkettingApiService', () => {
  let service: MarkettingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkettingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

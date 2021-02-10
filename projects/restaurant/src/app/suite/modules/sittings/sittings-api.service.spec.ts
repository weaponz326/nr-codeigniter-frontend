import { TestBed } from '@angular/core/testing';

import { SittingsApiService } from './sittings-api.service';

describe('SittingsApiService', () => {
  let service: SittingsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SittingsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

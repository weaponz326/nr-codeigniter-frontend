import { TestBed } from '@angular/core/testing';

import { ReceptionApiService } from './reception-api.service';

describe('ReceptionApiService', () => {
  let service: ReceptionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

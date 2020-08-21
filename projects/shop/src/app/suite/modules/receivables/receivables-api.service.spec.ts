import { TestBed } from '@angular/core/testing';

import { ReceivablesApiService } from './receivables-api.service';

describe('ReceivablesApiService', () => {
  let service: ReceivablesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceivablesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

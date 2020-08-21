import { TestBed } from '@angular/core/testing';

import { ContractorsApiService } from './contractors-api.service';

describe('ContractorsApiService', () => {
  let service: ContractorsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractorsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

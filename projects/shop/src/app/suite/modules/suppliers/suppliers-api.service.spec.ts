import { TestBed } from '@angular/core/testing';

import { SuppliersApiService } from './suppliers-api.service';

describe('SuppliersApiService', () => {
  let service: SuppliersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

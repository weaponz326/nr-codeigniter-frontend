import { TestBed } from '@angular/core/testing';

import { ManufacturingApiService } from './manufacturing-api.service';

describe('ManufacturingApiService', () => {
  let service: ManufacturingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManufacturingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

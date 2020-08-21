import { TestBed } from '@angular/core/testing';

import { LaboratoryApiService } from './laboratory-api.service';

describe('LaboratoryApiService', () => {
  let service: LaboratoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

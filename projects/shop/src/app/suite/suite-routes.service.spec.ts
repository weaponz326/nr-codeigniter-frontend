import { TestBed } from '@angular/core/testing';

import { SuiteRoutesService } from './suite-routes.service';

describe('SuiteRoutesService', () => {
  let service: SuiteRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiteRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

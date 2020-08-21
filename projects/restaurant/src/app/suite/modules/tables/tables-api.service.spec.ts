import { TestBed } from '@angular/core/testing';

import { TablesApiService } from './tables-api.service';

describe('TablesApiService', () => {
  let service: TablesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

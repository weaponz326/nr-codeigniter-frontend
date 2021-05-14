import { TestBed } from '@angular/core/testing';

import { SectionsApiService } from './sections-api.service';

describe('SectionsApiService', () => {
  let service: SectionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

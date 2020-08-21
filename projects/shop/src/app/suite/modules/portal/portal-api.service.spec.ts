import { TestBed } from '@angular/core/testing';

import { PortalApiService } from './portal-api.service';

describe('PortalApiService', () => {
  let service: PortalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

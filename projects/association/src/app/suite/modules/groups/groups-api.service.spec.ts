import { TestBed } from '@angular/core/testing';

import { GroupsApiService } from './groups-api.service';

describe('GroupsApiService', () => {
  let service: GroupsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

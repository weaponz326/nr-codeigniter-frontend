import { TestBed } from '@angular/core/testing';

import { CommitteesApiService } from './committees-api.service';

describe('CommitteesApiService', () => {
  let service: CommitteesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitteesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

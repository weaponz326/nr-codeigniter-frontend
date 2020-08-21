import { TestBed } from '@angular/core/testing';

import { ClassesApiService } from './classes-api.service';

describe('ClassesApiService', () => {
  let service: ClassesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

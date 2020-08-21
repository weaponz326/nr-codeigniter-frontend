import { TestBed } from '@angular/core/testing';

import { LettersApiService } from './letters-api.service';

describe('LettersApiService', () => {
  let service: LettersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LettersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

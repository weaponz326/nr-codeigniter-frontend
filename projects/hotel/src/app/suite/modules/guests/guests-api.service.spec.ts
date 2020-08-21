import { TestBed } from '@angular/core/testing';

import { GuestsApiService } from './guests-api.service';

describe('GuestsApiService', () => {
  let service: GuestsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

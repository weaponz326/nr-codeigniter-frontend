import { TestBed } from '@angular/core/testing';

import { ActionPlanApiService } from './action-plan-api.service';

describe('ActionPlanApiService', () => {
  let service: ActionPlanApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionPlanApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

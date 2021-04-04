import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisitorsComponent } from './all-visitors.component';

describe('AllVisitorsComponent', () => {
  let component: AllVisitorsComponent;
  let fixture: ComponentFixture<AllVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

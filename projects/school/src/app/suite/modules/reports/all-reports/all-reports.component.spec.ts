import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllReportsComponent } from './all-reports.component';

describe('AllReportsComponent', () => {
  let component: AllReportsComponent;
  let fixture: ComponentFixture<AllReportsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

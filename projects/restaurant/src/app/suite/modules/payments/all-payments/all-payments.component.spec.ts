import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllPaymentsComponent } from './all-payments.component';

describe('AllPaymentsComponent', () => {
  let component: AllPaymentsComponent;
  let fixture: ComponentFixture<AllPaymentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

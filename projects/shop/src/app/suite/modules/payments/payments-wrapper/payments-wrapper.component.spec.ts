import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaymentsWrapperComponent } from './payments-wrapper.component';

describe('PaymentsWrapperComponent', () => {
  let component: PaymentsWrapperComponent;
  let fixture: ComponentFixture<PaymentsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

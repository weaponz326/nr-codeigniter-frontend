import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPaymentComponent } from './view-payment.component';

describe('ViewPaymentComponent', () => {
  let component: ViewPaymentComponent;
  let fixture: ComponentFixture<ViewPaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

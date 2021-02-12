import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewPaymentComponent } from './new-payment.component';

describe('NewPaymentComponent', () => {
  let component: NewPaymentComponent;
  let fixture: ComponentFixture<NewPaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

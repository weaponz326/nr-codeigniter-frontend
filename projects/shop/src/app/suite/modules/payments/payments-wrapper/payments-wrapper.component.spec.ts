import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsWrapperComponent } from './payments-wrapper.component';

describe('PaymentsWrapperComponent', () => {
  let component: PaymentsWrapperComponent;
  let fixture: ComponentFixture<PaymentsWrapperComponent>;

  beforeEach(async(() => {
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

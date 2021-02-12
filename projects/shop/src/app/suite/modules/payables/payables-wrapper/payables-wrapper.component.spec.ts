import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PayablesWrapperComponent } from './payables-wrapper.component';

describe('PayablesWrapperComponent', () => {
  let component: PayablesWrapperComponent;
  let fixture: ComponentFixture<PayablesWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PayablesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayablesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

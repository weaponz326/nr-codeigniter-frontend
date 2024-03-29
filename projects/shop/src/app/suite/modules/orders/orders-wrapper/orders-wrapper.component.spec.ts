import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersWrapperComponent } from './orders-wrapper.component';

describe('OrdersWrapperComponent', () => {
  let component: OrdersWrapperComponent;
  let fixture: ComponentFixture<OrdersWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

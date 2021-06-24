import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsHistoryComponent } from './payments-history.component';

describe('PaymentsHistoryComponent', () => {
  let component: PaymentsHistoryComponent;
  let fixture: ComponentFixture<PaymentsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

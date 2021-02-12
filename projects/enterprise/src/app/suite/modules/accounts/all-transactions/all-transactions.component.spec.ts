import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllTransactionsComponent } from './all-transactions.component';

describe('AllTransactionsComponent', () => {
  let component: AllTransactionsComponent;
  let fixture: ComponentFixture<AllTransactionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

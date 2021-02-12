import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountTransactionsComponent } from './account-transactions.component';

describe('AccountTransactionsComponent', () => {
  let component: AccountTransactionsComponent;
  let fixture: ComponentFixture<AccountTransactionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

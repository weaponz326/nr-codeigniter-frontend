import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountsWrapperComponent } from './accounts-wrapper.component';

describe('AccountsWrapperComponent', () => {
  let component: AccountsWrapperComponent;
  let fixture: ComponentFixture<AccountsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

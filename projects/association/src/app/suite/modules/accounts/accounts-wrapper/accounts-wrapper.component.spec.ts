import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsWrapperComponent } from './accounts-wrapper.component';

describe('AccountsWrapperComponent', () => {
  let component: AccountsWrapperComponent;
  let fixture: ComponentFixture<AccountsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

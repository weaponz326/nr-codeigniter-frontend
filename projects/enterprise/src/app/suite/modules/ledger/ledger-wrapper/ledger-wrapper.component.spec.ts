import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LedgerWrapperComponent } from './ledger-wrapper.component';

describe('LedgerWrapperComponent', () => {
  let component: LedgerWrapperComponent;
  let fixture: ComponentFixture<LedgerWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerWrapperComponent } from './ledger-wrapper.component';

describe('LedgerWrapperComponent', () => {
  let component: LedgerWrapperComponent;
  let fixture: ComponentFixture<LedgerWrapperComponent>;

  beforeEach(async(() => {
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

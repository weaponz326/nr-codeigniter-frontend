import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLedgerComponent } from './all-ledger.component';

describe('AllLedgerComponent', () => {
  let component: AllLedgerComponent;
  let fixture: ComponentFixture<AllLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

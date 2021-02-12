import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewLedgerComponent } from './new-ledger.component';

describe('NewLedgerComponent', () => {
  let component: NewLedgerComponent;
  let fixture: ComponentFixture<NewLedgerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

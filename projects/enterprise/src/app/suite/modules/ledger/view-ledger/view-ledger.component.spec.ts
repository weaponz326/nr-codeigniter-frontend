import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewLedgerComponent } from './view-ledger.component';

describe('ViewLedgerComponent', () => {
  let component: ViewLedgerComponent;
  let fixture: ComponentFixture<ViewLedgerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

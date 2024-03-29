import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LedgerTableComponent } from './ledger-table.component';

describe('LedgerTableComponent', () => {
  let component: LedgerTableComponent;
  let fixture: ComponentFixture<LedgerTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

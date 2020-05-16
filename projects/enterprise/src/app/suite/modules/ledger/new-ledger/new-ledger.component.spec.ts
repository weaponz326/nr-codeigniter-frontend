import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLedgerComponent } from './new-ledger.component';

describe('NewLedgerComponent', () => {
  let component: NewLedgerComponent;
  let fixture: ComponentFixture<NewLedgerComponent>;

  beforeEach(async(() => {
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

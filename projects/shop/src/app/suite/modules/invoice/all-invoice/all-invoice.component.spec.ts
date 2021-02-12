import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllInvoiceComponent } from './all-invoice.component';

describe('AllInvoiceComponent', () => {
  let component: AllInvoiceComponent;
  let fixture: ComponentFixture<AllInvoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

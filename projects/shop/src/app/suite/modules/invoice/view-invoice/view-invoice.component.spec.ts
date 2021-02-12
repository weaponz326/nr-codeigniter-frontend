import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewInvoiceComponent } from './view-invoice.component';

describe('ViewInvoiceComponent', () => {
  let component: ViewInvoiceComponent;
  let fixture: ComponentFixture<ViewInvoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

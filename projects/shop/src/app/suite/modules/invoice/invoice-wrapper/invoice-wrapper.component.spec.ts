import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvoiceWrapperComponent } from './invoice-wrapper.component';

describe('InvoiceWrapperComponent', () => {
  let component: InvoiceWrapperComponent;
  let fixture: ComponentFixture<InvoiceWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

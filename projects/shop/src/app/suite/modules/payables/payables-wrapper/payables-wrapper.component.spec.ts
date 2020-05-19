import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayablesWrapperComponent } from './payables-wrapper.component';

describe('PayablesWrapperComponent', () => {
  let component: PayablesWrapperComponent;
  let fixture: ComponentFixture<PayablesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayablesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayablesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

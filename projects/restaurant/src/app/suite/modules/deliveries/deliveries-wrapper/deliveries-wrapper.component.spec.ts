import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeliveriesWrapperComponent } from './deliveries-wrapper.component';

describe('DeliveriesWrapperComponent', () => {
  let component: DeliveriesWrapperComponent;
  let fixture: ComponentFixture<DeliveriesWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveriesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

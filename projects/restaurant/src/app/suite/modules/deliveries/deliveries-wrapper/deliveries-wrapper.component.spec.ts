import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesWrapperComponent } from './deliveries-wrapper.component';

describe('DeliveriesWrapperComponent', () => {
  let component: DeliveriesWrapperComponent;
  let fixture: ComponentFixture<DeliveriesWrapperComponent>;

  beforeEach(async(() => {
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

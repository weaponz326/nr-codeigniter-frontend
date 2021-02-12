import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomersWrapperComponent } from './customers-wrapper.component';

describe('CustomersWrapperComponent', () => {
  let component: CustomersWrapperComponent;
  let fixture: ComponentFixture<CustomersWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PurchasingWrapperComponent } from './purchasing-wrapper.component';

describe('PurchasingWrapperComponent', () => {
  let component: PurchasingWrapperComponent;
  let fixture: ComponentFixture<PurchasingWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

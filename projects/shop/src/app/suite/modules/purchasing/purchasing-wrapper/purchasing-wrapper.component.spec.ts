import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingWrapperComponent } from './purchasing-wrapper.component';

describe('PurchasingWrapperComponent', () => {
  let component: PurchasingWrapperComponent;
  let fixture: ComponentFixture<PurchasingWrapperComponent>;

  beforeEach(async(() => {
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

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PurchasingDetailsComponent } from './purchasing-details.component';

describe('PurchasingDetailsComponent', () => {
  let component: PurchasingDetailsComponent;
  let fixture: ComponentFixture<PurchasingDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

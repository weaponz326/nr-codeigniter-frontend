import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPurchasingComponent } from './view-purchasing.component';

describe('ViewPurchasingComponent', () => {
  let component: ViewPurchasingComponent;
  let fixture: ComponentFixture<ViewPurchasingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPurchasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllPurchasingComponent } from './all-purchasing.component';

describe('AllPurchasingComponent', () => {
  let component: AllPurchasingComponent;
  let fixture: ComponentFixture<AllPurchasingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPurchasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

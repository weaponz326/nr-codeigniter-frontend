import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllOrdersComponent } from './all-orders.component';

describe('AllOrdersComponent', () => {
  let component: AllOrdersComponent;
  let fixture: ComponentFixture<AllOrdersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

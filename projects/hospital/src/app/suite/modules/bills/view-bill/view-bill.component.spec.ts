import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewBillComponent } from './view-bill.component';

describe('ViewBillComponent', () => {
  let component: ViewBillComponent;
  let fixture: ComponentFixture<ViewBillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

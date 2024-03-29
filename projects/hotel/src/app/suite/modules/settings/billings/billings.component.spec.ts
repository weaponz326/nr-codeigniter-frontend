import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BillingsComponent } from './billings.component';

describe('BillingsComponent', () => {
  let component: BillingsComponent;
  let fixture: ComponentFixture<BillingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

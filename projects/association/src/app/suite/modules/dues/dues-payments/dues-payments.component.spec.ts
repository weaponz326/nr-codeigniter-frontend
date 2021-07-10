import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuesPaymentsComponent } from './dues-payments.component';

describe('DuesPaymentsComponent', () => {
  let component: DuesPaymentsComponent;
  let fixture: ComponentFixture<DuesPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuesPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuesPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

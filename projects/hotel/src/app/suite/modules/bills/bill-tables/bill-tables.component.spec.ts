import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BillTablesComponent } from './bill-tables.component';

describe('BillTablesComponent', () => {
  let component: BillTablesComponent;
  let fixture: ComponentFixture<BillTablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BillTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

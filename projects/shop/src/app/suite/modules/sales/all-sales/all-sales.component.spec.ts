import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSalesComponent } from './all-sales.component';

describe('AllSalesComponent', () => {
  let component: AllSalesComponent;
  let fixture: ComponentFixture<AllSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

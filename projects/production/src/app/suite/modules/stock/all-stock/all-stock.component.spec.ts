import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllStockComponent } from './all-stock.component';

describe('AllStockComponent', () => {
  let component: AllStockComponent;
  let fixture: ComponentFixture<AllStockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

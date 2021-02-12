import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StockWrapperComponent } from './stock-wrapper.component';

describe('StockWrapperComponent', () => {
  let component: StockWrapperComponent;
  let fixture: ComponentFixture<StockWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

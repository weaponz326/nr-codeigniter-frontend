import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockWrapperComponent } from './stock-wrapper.component';

describe('StockWrapperComponent', () => {
  let component: StockWrapperComponent;
  let fixture: ComponentFixture<StockWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

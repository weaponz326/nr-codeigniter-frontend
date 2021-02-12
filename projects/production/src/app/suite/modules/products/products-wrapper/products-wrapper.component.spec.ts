import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductsWrapperComponent } from './products-wrapper.component';

describe('ProductsWrapperComponent', () => {
  let component: ProductsWrapperComponent;
  let fixture: ComponentFixture<ProductsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

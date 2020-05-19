import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWrapperComponent } from './products-wrapper.component';

describe('ProductsWrapperComponent', () => {
  let component: ProductsWrapperComponent;
  let fixture: ComponentFixture<ProductsWrapperComponent>;

  beforeEach(async(() => {
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

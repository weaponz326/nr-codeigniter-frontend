import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesWrapperComponent } from './sales-wrapper.component';

describe('SalesWrapperComponent', () => {
  let component: SalesWrapperComponent;
  let fixture: ComponentFixture<SalesWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

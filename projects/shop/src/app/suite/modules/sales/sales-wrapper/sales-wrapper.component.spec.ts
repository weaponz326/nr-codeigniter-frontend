import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesWrapperComponent } from './sales-wrapper.component';

describe('SalesWrapperComponent', () => {
  let component: SalesWrapperComponent;
  let fixture: ComponentFixture<SalesWrapperComponent>;

  beforeEach(async(() => {
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

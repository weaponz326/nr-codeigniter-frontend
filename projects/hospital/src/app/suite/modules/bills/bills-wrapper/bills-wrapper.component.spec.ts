import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsWrapperComponent } from './bills-wrapper.component';

describe('BillsWrapperComponent', () => {
  let component: BillsWrapperComponent;
  let fixture: ComponentFixture<BillsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

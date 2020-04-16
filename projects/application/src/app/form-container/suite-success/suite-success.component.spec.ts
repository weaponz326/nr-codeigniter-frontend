import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteSuccessComponent } from './suite-success.component';

describe('SuiteSuccessComponent', () => {
  let component: SuiteSuccessComponent;
  let fixture: ComponentFixture<SuiteSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

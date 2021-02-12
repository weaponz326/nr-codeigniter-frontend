import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportsWrapperComponent } from './reports-wrapper.component';

describe('ReportsWrapperComponent', () => {
  let component: ReportsWrapperComponent;
  let fixture: ComponentFixture<ReportsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

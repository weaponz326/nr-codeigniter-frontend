import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarkettingWrapperComponent } from './marketting-wrapper.component';

describe('MarkettingWrapperComponent', () => {
  let component: MarkettingWrapperComponent;
  let fixture: ComponentFixture<MarkettingWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkettingWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkettingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

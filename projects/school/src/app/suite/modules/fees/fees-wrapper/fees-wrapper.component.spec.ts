import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeesWrapperComponent } from './fees-wrapper.component';

describe('FeesWrapperComponent', () => {
  let component: FeesWrapperComponent;
  let fixture: ComponentFixture<FeesWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewLeaveComponent } from './view-leave.component';

describe('ViewLeaveComponent', () => {
  let component: ViewLeaveComponent;
  let fixture: ComponentFixture<ViewLeaveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddLeaveComponent } from './add-leave.component';

describe('AddLeaveComponent', () => {
  let component: AddLeaveComponent;
  let fixture: ComponentFixture<AddLeaveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

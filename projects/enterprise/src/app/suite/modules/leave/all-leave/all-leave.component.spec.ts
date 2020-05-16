import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaveComponent } from './all-leave.component';

describe('AllLeaveComponent', () => {
  let component: AllLeaveComponent;
  let fixture: ComponentFixture<AllLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

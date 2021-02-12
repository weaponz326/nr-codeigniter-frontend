import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkersWrapperComponent } from './workers-wrapper.component';

describe('WorkersWrapperComponent', () => {
  let component: WorkersWrapperComponent;
  let fixture: ComponentFixture<WorkersWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

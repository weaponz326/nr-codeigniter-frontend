import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewWorkerComponent } from './view-worker.component';

describe('ViewWorkerComponent', () => {
  let component: ViewWorkerComponent;
  let fixture: ComponentFixture<ViewWorkerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

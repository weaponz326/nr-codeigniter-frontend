import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewWorkerComponent } from './new-worker.component';

describe('NewWorkerComponent', () => {
  let component: NewWorkerComponent;
  let fixture: ComponentFixture<NewWorkerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

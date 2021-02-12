import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReceivedFormComponent } from './received-form.component';

describe('ReceivedFormComponent', () => {
  let component: ReceivedFormComponent;
  let fixture: ComponentFixture<ReceivedFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

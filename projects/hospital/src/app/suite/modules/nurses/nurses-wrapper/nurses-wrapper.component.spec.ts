import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NursesWrapperComponent } from './nurses-wrapper.component';

describe('NursesWrapperComponent', () => {
  let component: NursesWrapperComponent;
  let fixture: ComponentFixture<NursesWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NursesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DoctorsWrapperComponent } from './doctors-wrapper.component';

describe('DoctorsWrapperComponent', () => {
  let component: DoctorsWrapperComponent;
  let fixture: ComponentFixture<DoctorsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatientsWrapperComponent } from './patients-wrapper.component';

describe('PatientsWrapperComponent', () => {
  let component: PatientsWrapperComponent;
  let fixture: ComponentFixture<PatientsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

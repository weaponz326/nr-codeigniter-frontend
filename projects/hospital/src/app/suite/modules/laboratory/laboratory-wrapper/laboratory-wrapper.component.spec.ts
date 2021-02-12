import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LaboratoryWrapperComponent } from './laboratory-wrapper.component';

describe('LaboratoryWrapperComponent', () => {
  let component: LaboratoryWrapperComponent;
  let fixture: ComponentFixture<LaboratoryWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

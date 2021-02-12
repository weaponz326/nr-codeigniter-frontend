import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllSubjectsComponent } from './all-subjects.component';

describe('AllSubjectsComponent', () => {
  let component: AllSubjectsComponent;
  let fixture: ComponentFixture<AllSubjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

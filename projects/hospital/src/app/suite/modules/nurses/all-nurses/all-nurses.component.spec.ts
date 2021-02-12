import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllNursesComponent } from './all-nurses.component';

describe('AllNursesComponent', () => {
  let component: AllNursesComponent;
  let fixture: ComponentFixture<AllNursesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

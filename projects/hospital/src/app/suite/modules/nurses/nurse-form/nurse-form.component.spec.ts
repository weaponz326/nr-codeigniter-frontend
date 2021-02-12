import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NurseFormComponent } from './nurse-form.component';

describe('NurseFormComponent', () => {
  let component: NurseFormComponent;
  let fixture: ComponentFixture<NurseFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

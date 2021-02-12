import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewNurseComponent } from './view-nurse.component';

describe('ViewNurseComponent', () => {
  let component: ViewNurseComponent;
  let fixture: ComponentFixture<ViewNurseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

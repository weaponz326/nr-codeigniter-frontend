import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNurseComponent } from './view-nurse.component';

describe('ViewNurseComponent', () => {
  let component: ViewNurseComponent;
  let fixture: ComponentFixture<ViewNurseComponent>;

  beforeEach(async(() => {
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

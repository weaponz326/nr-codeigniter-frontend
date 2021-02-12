import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachersTableComponent } from './teachers-table.component';

describe('TeachersTableComponent', () => {
  let component: TeachersTableComponent;
  let fixture: ComponentFixture<TeachersTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

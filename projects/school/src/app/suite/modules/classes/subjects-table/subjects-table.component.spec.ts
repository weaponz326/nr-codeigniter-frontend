import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectsTableComponent } from './subjects-table.component';

describe('SubjectsTableComponent', () => {
  let component: SubjectsTableComponent;
  let fixture: ComponentFixture<SubjectsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

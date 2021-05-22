import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteesWrapperComponent } from './committees-wrapper.component';

describe('CommitteesWrapperComponent', () => {
  let component: CommitteesWrapperComponent;
  let fixture: ComponentFixture<CommitteesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeMembersComponent } from './committee-members.component';

describe('CommitteeMembersComponent', () => {
  let component: CommitteeMembersComponent;
  let fixture: ComponentFixture<CommitteeMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

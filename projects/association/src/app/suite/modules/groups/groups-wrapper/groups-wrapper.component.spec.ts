import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsWrapperComponent } from './groups-wrapper.component';

describe('GroupsWrapperComponent', () => {
  let component: GroupsWrapperComponent;
  let fixture: ComponentFixture<GroupsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMiniActivitiesComponent } from './user-mini-activities.component';

describe('UserMiniActivitiesComponent', () => {
  let component: UserMiniActivitiesComponent;
  let fixture: ComponentFixture<UserMiniActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMiniActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMiniActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthWrapperComponent } from './user-auth-wrapper.component';

describe('UserAuthWrapperComponent', () => {
  let component: UserAuthWrapperComponent;
  let fixture: ComponentFixture<UserAuthWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

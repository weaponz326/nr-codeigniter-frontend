import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersWrapperComponent } from './members-wrapper.component';

describe('MembersWrapperComponent', () => {
  let component: MembersWrapperComponent;
  let fixture: ComponentFixture<MembersWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

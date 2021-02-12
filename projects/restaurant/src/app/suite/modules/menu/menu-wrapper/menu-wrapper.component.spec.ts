import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuWrapperComponent } from './menu-wrapper.component';

describe('MenuWrapperComponent', () => {
  let component: MenuWrapperComponent;
  let fixture: ComponentFixture<MenuWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

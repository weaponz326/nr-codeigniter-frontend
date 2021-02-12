import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainWrapperComponent } from './main-wrapper.component';

describe('MainWrapperComponent', () => {
  let component: MainWrapperComponent;
  let fixture: ComponentFixture<MainWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

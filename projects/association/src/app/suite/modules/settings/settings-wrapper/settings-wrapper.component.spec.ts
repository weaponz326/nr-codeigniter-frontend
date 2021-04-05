import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SettingsWrapperComponent } from './settings-wrapper.component';

describe('SettingsWrapperComponent', () => {
  let component: SettingsWrapperComponent;
  let fixture: ComponentFixture<SettingsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

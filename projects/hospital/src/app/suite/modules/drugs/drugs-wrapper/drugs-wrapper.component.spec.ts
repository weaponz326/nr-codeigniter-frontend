import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DrugsWrapperComponent } from './drugs-wrapper.component';

describe('DrugsWrapperComponent', () => {
  let component: DrugsWrapperComponent;
  let fixture: ComponentFixture<DrugsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

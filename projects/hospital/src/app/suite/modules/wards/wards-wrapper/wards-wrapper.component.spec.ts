import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WardsWrapperComponent } from './wards-wrapper.component';

describe('WardsWrapperComponent', () => {
  let component: WardsWrapperComponent;
  let fixture: ComponentFixture<WardsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WardsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

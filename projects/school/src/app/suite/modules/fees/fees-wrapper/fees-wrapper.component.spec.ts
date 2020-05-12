import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesWrapperComponent } from './fees-wrapper.component';

describe('FeesWrapperComponent', () => {
  let component: FeesWrapperComponent;
  let fixture: ComponentFixture<FeesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

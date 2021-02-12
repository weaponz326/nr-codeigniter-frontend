import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewClassComponent } from './view-class.component';

describe('ViewClassComponent', () => {
  let component: ViewClassComponent;
  let fixture: ComponentFixture<ViewClassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

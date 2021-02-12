import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewWardComponent } from './view-ward.component';

describe('ViewWardComponent', () => {
  let component: ViewWardComponent;
  let fixture: ComponentFixture<ViewWardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

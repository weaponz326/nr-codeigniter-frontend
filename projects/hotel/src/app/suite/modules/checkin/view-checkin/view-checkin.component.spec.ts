import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewCheckinComponent } from './view-checkin.component';

describe('ViewCheckinComponent', () => {
  let component: ViewCheckinComponent;
  let fixture: ComponentFixture<ViewCheckinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

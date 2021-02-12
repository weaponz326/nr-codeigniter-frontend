import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewAccountComponent } from './view-account.component';

describe('ViewAccountComponent', () => {
  let component: ViewAccountComponent;
  let fixture: ComponentFixture<ViewAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

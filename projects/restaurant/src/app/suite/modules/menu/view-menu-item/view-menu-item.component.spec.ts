import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewMenuItemComponent } from './view-menu-item.component';

describe('ViewMenuItemComponent', () => {
  let component: ViewMenuItemComponent;
  let fixture: ComponentFixture<ViewMenuItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

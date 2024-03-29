import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewTableComponent } from './view-table.component';

describe('ViewTableComponent', () => {
  let component: ViewTableComponent;
  let fixture: ComponentFixture<ViewTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

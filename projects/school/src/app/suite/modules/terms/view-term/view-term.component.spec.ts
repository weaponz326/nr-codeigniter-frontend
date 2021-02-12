import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewTermComponent } from './view-term.component';

describe('ViewTermComponent', () => {
  let component: ViewTermComponent;
  let fixture: ComponentFixture<ViewTermComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

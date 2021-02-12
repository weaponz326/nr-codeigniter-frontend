import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewLabComponent } from './view-lab.component';

describe('ViewLabComponent', () => {
  let component: ViewLabComponent;
  let fixture: ComponentFixture<ViewLabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

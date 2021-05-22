import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExecutiveComponent } from './view-executive.component';

describe('ViewExecutiveComponent', () => {
  let component: ViewExecutiveComponent;
  let fixture: ComponentFixture<ViewExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

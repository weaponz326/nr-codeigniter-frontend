import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuarterlyComponent } from './quarterly.component';

describe('QuarterlyComponent', () => {
  let component: QuarterlyComponent;
  let fixture: ComponentFixture<QuarterlyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

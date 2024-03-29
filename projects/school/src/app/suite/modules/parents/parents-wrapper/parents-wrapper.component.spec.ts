import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentsWrapperComponent } from './parents-wrapper.component';

describe('ParentsWrapperComponent', () => {
  let component: ParentsWrapperComponent;
  let fixture: ComponentFixture<ParentsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

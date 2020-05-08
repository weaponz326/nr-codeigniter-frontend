import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesWrapperComponent } from './nurses-wrapper.component';

describe('NursesWrapperComponent', () => {
  let component: NursesWrapperComponent;
  let fixture: ComponentFixture<NursesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

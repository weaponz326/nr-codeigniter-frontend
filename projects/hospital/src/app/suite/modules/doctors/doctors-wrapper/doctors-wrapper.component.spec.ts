import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsWrapperComponent } from './doctors-wrapper.component';

describe('DoctorsWrapperComponent', () => {
  let component: DoctorsWrapperComponent;
  let fixture: ComponentFixture<DoctorsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

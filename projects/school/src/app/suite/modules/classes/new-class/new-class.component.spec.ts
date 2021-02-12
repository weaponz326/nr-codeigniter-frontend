import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewClassComponent } from './new-class.component';

describe('NewClassComponent', () => {
  let component: NewClassComponent;
  let fixture: ComponentFixture<NewClassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

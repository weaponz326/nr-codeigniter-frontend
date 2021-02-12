import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewTermComponent } from './new-term.component';

describe('NewTermComponent', () => {
  let component: NewTermComponent;
  let fixture: ComponentFixture<NewTermComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

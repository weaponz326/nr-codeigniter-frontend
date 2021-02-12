import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddSentComponent } from './add-sent.component';

describe('AddSentComponent', () => {
  let component: AddSentComponent;
  let fixture: ComponentFixture<AddSentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

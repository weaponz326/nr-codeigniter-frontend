import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddReceivedComponent } from './add-received.component';

describe('AddReceivedComponent', () => {
  let component: AddReceivedComponent;
  let fixture: ComponentFixture<AddReceivedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

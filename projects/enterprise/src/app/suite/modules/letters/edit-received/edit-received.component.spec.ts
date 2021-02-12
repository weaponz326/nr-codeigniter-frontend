import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditReceivedComponent } from './edit-received.component';

describe('EditReceivedComponent', () => {
  let component: EditReceivedComponent;
  let fixture: ComponentFixture<EditReceivedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddServicesComponent } from './add-services.component';

describe('AddServicesComponent', () => {
  let component: AddServicesComponent;
  let fixture: ComponentFixture<AddServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

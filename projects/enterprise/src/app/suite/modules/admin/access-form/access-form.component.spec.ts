import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccessFormComponent } from './access-form.component';

describe('AccessFormComponent', () => {
  let component: AccessFormComponent;
  let fixture: ComponentFixture<AccessFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

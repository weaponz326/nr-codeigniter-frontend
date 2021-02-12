import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccessDenyComponent } from './access-deny.component';

describe('AccessDenyComponent', () => {
  let component: AccessDenyComponent;
  let fixture: ComponentFixture<AccessDenyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessDenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessDenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

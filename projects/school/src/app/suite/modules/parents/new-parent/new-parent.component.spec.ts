import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewParentComponent } from './new-parent.component';

describe('NewParentComponent', () => {
  let component: NewParentComponent;
  let fixture: ComponentFixture<NewParentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

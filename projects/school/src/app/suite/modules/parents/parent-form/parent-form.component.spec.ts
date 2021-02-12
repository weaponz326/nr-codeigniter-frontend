import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentFormComponent } from './parent-form.component';

describe('ParentFormComponent', () => {
  let component: ParentFormComponent;
  let fixture: ComponentFixture<ParentFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

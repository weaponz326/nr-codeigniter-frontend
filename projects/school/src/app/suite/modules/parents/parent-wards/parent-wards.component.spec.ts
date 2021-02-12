import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentWardsComponent } from './parent-wards.component';

describe('ParentWardsComponent', () => {
  let component: ParentWardsComponent;
  let fixture: ComponentFixture<ParentWardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentWardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentWardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

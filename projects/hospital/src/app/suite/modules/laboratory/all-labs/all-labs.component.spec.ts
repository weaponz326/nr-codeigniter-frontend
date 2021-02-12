import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllLabsComponent } from './all-labs.component';

describe('AllLabsComponent', () => {
  let component: AllLabsComponent;
  let fixture: ComponentFixture<AllLabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

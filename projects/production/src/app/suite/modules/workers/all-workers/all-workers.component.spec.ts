import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllWorkersComponent } from './all-workers.component';

describe('AllWorkersComponent', () => {
  let component: AllWorkersComponent;
  let fixture: ComponentFixture<AllWorkersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

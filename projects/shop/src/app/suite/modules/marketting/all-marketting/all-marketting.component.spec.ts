import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMarkettingComponent } from './all-marketting.component';

describe('AllMarkettingComponent', () => {
  let component: AllMarkettingComponent;
  let fixture: ComponentFixture<AllMarkettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMarkettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMarkettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCheckinComponent } from './all-checkin.component';

describe('AllCheckinComponent', () => {
  let component: AllCheckinComponent;
  let fixture: ComponentFixture<AllCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuestsComponent } from './all-guests.component';

describe('AllGuestsComponent', () => {
  let component: AllGuestsComponent;
  let fixture: ComponentFixture<AllGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

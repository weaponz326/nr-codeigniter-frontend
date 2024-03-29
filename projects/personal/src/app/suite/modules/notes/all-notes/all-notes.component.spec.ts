import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllNotesComponent } from './all-notes.component';

describe('AllNotesComponent', () => {
  let component: AllNotesComponent;
  let fixture: ComponentFixture<AllNotesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

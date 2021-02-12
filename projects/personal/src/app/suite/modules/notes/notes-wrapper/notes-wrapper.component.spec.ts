import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotesWrapperComponent } from './notes-wrapper.component';

describe('NotesWrapperComponent', () => {
  let component: NotesWrapperComponent;
  let fixture: ComponentFixture<NotesWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSentComponent } from './edit-sent.component';

describe('EditSentComponent', () => {
  let component: EditSentComponent;
  let fixture: ComponentFixture<EditSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

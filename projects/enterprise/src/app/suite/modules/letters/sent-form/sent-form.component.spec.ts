import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentFormComponent } from './sent-form.component';

describe('SentFormComponent', () => {
  let component: SentFormComponent;
  let fixture: ComponentFixture<SentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

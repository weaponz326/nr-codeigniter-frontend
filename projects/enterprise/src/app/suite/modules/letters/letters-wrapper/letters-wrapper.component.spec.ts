import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersWrapperComponent } from './letters-wrapper.component';

describe('LettersWrapperComponent', () => {
  let component: LettersWrapperComponent;
  let fixture: ComponentFixture<LettersWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettersWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

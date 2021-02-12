import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LettersWrapperComponent } from './letters-wrapper.component';

describe('LettersWrapperComponent', () => {
  let component: LettersWrapperComponent;
  let fixture: ComponentFixture<LettersWrapperComponent>;

  beforeEach(waitForAsync(() => {
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

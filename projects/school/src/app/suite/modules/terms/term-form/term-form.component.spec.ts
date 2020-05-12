import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermFormComponent } from './term-form.component';

describe('TermFormComponent', () => {
  let component: TermFormComponent;
  let fixture: ComponentFixture<TermFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTermComponent } from './view-term.component';

describe('ViewTermComponent', () => {
  let component: ViewTermComponent;
  let fixture: ComponentFixture<ViewTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

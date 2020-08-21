import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRinkComponent } from './view-rink.component';

describe('ViewRinkComponent', () => {
  let component: ViewRinkComponent;
  let fixture: ComponentFixture<ViewRinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

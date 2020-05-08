import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLabComponent } from './view-lab.component';

describe('ViewLabComponent', () => {
  let component: ViewLabComponent;
  let fixture: ComponentFixture<ViewLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

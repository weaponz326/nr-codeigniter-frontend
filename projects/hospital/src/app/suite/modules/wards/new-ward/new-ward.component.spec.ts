import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWardComponent } from './new-ward.component';

describe('NewWardComponent', () => {
  let component: NewWardComponent;
  let fixture: ComponentFixture<NewWardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

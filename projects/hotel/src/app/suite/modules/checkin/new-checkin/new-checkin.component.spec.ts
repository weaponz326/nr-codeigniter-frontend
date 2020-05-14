import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCheckinComponent } from './new-checkin.component';

describe('NewCheckinComponent', () => {
  let component: NewCheckinComponent;
  let fixture: ComponentFixture<NewCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNurseComponent } from './new-nurse.component';

describe('NewNurseComponent', () => {
  let component: NewNurseComponent;
  let fixture: ComponentFixture<NewNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

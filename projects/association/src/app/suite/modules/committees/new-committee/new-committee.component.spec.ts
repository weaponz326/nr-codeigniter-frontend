import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommitteeComponent } from './new-committee.component';

describe('NewCommitteeComponent', () => {
  let component: NewCommitteeComponent;
  let fixture: ComponentFixture<NewCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

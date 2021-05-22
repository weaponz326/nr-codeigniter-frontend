import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommitteeComponent } from './view-committee.component';

describe('ViewCommitteeComponent', () => {
  let component: ViewCommitteeComponent;
  let fixture: ComponentFixture<ViewCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentContactsComponent } from './recent-contacts.component';

describe('RecentContactsComponent', () => {
  let component: RecentContactsComponent;
  let fixture: ComponentFixture<RecentContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

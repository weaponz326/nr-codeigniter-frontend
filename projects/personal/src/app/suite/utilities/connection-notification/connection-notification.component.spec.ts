import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionNotificationComponent } from './connection-notification.component';

describe('ConnectionNotificationComponent', () => {
  let component: ConnectionNotificationComponent;
  let fixture: ComponentFixture<ConnectionNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

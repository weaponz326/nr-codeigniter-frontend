import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewRinkComponent } from './new-rink.component';

describe('NewRinkComponent', () => {
  let component: NewRinkComponent;
  let fixture: ComponentFixture<NewRinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

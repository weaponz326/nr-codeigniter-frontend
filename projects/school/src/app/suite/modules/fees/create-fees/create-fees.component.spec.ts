import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateFeesComponent } from './create-fees.component';

describe('CreateFeesComponent', () => {
  let component: CreateFeesComponent;
  let fixture: ComponentFixture<CreateFeesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

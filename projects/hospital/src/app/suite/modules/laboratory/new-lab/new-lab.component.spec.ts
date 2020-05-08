import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLabComponent } from './new-lab.component';

describe('NewLabComponent', () => {
  let component: NewLabComponent;
  let fixture: ComponentFixture<NewLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

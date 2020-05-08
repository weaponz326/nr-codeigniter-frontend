import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLabsComponent } from './all-labs.component';

describe('AllLabsComponent', () => {
  let component: AllLabsComponent;
  let fixture: ComponentFixture<AllLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

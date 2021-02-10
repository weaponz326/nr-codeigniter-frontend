import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSittingComponent } from './new-sitting.component';

describe('NewSittingComponent', () => {
  let component: NewSittingComponent;
  let fixture: ComponentFixture<NewSittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSittingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

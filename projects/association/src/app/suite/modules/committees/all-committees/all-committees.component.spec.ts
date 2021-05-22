import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommitteesComponent } from './all-committees.component';

describe('AllCommitteesComponent', () => {
  let component: AllCommitteesComponent;
  let fixture: ComponentFixture<AllCommitteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCommitteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

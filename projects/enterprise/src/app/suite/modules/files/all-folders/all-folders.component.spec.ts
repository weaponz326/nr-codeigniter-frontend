import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllFoldersComponent } from './all-folders.component';

describe('AllFoldersComponent', () => {
  let component: AllFoldersComponent;
  let fixture: ComponentFixture<AllFoldersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

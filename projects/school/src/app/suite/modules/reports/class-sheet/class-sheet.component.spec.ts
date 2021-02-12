import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassSheetComponent } from './class-sheet.component';

describe('ClassSheetComponent', () => {
  let component: ClassSheetComponent;
  let fixture: ComponentFixture<ClassSheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

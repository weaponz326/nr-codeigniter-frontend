import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilesWrapperComponent } from './files-wrapper.component';

describe('FilesWrapperComponent', () => {
  let component: FilesWrapperComponent;
  let fixture: ComponentFixture<FilesWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

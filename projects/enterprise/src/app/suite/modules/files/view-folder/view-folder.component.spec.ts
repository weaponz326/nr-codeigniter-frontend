import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewFolderComponent } from './view-folder.component';

describe('ViewFolderComponent', () => {
  let component: ViewFolderComponent;
  let fixture: ComponentFixture<ViewFolderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

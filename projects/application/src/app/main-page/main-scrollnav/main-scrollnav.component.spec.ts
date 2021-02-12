import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainScrollnavComponent } from './main-scrollnav.component';

describe('MainScrollnavComponent', () => {
  let component: MainScrollnavComponent;
  let fixture: ComponentFixture<MainScrollnavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScrollnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScrollnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

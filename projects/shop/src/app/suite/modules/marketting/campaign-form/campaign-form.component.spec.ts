import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CampaignFormComponent } from './campaign-form.component';

describe('CampaignFormComponent', () => {
  let component: CampaignFormComponent;
  let fixture: ComponentFixture<CampaignFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

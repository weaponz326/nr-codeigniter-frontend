import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']
})
export class CampaignFormComponent implements OnInit {

  constructor() { }

  @ViewChild("campaignNameReference") campaignName: jqxInputComponent;
  @ViewChild("campaignTypeReference") campaignType: jqxInputComponent;
  @ViewChild("targetAudienceReference") targetAudience: jqxTextAreaComponent;
  @ViewChild("statusReference") campaignStatus: jqxDropDownListComponent;
  @ViewChild("supervisorReference") supervisor: jqxDropDownListComponent;
  @ViewChild("goalsReference") goals: jqxTextAreaComponent;
  @ViewChild("startDateReference") startDate: jqxDateTimeInputComponent;
  @ViewChild("endDateReference") endDate: jqxDateTimeInputComponent;

  ngOnInit(): void {
  }

}

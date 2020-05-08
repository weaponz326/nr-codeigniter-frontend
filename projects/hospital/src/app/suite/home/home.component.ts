import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxTooltipComponent } from 'jqwidgets-ng/jqxtooltip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild("#adminTooltipReference") adminTooltip: jqxTooltipComponent;
  @ViewChild("#patientsTooltipReference") patientsTooltip: jqxTooltipComponent;
  @ViewChild("#appointmentsTooltipReference") appointmensTooltip: jqxTooltipComponent;
  @ViewChild("#staffTooltipReference") staffTooltip: jqxTooltipComponent;
  @ViewChild("#billsTooltipReference") billsTooltip: jqxTooltipComponent;
  @ViewChild("#doctorsTooltipReference") doctorsTooltip: jqxTooltipComponent;
  @ViewChild("#laboratoryTooltipReference") laboratoryTooltip: jqxTooltipComponent;
  @ViewChild("#paymentsTooltipReference") paymentsTooltip: jqxTooltipComponent;
  @ViewChild("#nursesTooltipReference") nursesTooltip: jqxTooltipComponent;
  @ViewChild("#prescriptionsTooltipReference") prescriptionsTooltip: jqxTooltipComponent;
  @ViewChild("#diagnosisTooltipReference") diagnosisTooltip: jqxTooltipComponent;
  @ViewChild("#drugsTooltipReference") drugsTooltip: jqxTooltipComponent;
  @ViewChild("#wardsTooltipReference") wardsTooltip: jqxTooltipComponent;
  @ViewChild("#admissionsTooltipReference") admissionsTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;

  ngOnInit(): void {
  }

}

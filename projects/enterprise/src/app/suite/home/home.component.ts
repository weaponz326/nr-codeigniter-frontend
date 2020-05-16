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
  @ViewChild("#accountsTooltipReference") accountsTooltip: jqxTooltipComponent;
  @ViewChild("#payrollTooltipReference") payrollTooltip: jqxTooltipComponent;
  @ViewChild("#attendanceTooltipReference") attendanceTooltip: jqxTooltipComponent;
  @ViewChild("#assetsTooltipReference") assetsTooltip: jqxTooltipComponent;
  @ViewChild("#leaveTooltipReference") leaveTooltip: jqxTooltipComponent;
  @ViewChild("#budgetTooltipReference") budgetTooltip: jqxTooltipComponent;
  @ViewChild("#procurementTooltipReference") procurementTooltip: jqxTooltipComponent;
  @ViewChild("#lettersTooltipReference") lettersTooltip: jqxTooltipComponent;
  @ViewChild("#appraisalTooltipReference") appraisalTooltip: jqxTooltipComponent;
  @ViewChild("#filesTooltipReference") filesTooltip: jqxTooltipComponent;
  @ViewChild("#employeesTooltipReference") employeesTooltip: jqxTooltipComponent;
  @ViewChild("#departmentsTooltipReference") departmentsTooltip: jqxTooltipComponent;
  @ViewChild("#ledgerTooltipReference") ledgerTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;

  ngOnInit(): void {
  }

}

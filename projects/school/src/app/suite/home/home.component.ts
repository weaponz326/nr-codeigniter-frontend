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
  @ViewChild("#parentsTooltipReference") parentsTooltip: jqxTooltipComponent;
  @ViewChild("#assessmentTooltipReference") assessmentTooltip: jqxTooltipComponent;
  @ViewChild("#subjectsTooltipReference") subjectsTooltip: jqxTooltipComponent;
  @ViewChild("#attendanceTooltipReference") attendanceTooltip: jqxTooltipComponent;
  @ViewChild("#studentsTooltipReference") studentsTooltip: jqxTooltipComponent;
  @ViewChild("#reportsTooltipReference") reportsTooltip: jqxTooltipComponent;
  @ViewChild("#teachersTooltipReference") teachersTooltip: jqxTooltipComponent;
  @ViewChild("#staffTooltipReference") staffTooltip: jqxTooltipComponent;
  @ViewChild("#paymentsTooltipReference") paymentsTooltip: jqxTooltipComponent;
  @ViewChild("#classesTooltipReference") classesTooltip: jqxTooltipComponent;
  @ViewChild("#feesTooltipReference") feesTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;
  
  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxTooltipComponent } from 'jqwidgets-ng/jqxtooltip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild("#calendarTooltipReference") calendarTootip: jqxTooltipComponent;
  @ViewChild("#budgetTooltipReference") budgetTootip: jqxTooltipComponent;
  @ViewChild("#notesTooltipReference") notesTootip: jqxTooltipComponent;
  @ViewChild("#accountsTooltipReference") accountsTootip: jqxTooltipComponent;
  @ViewChild("#tasksTooltipReference") tasksTootip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTootip: jqxTooltipComponent;

  ngOnInit(): void {
  }

}

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
  @ViewChild("#menuTooltipReference") menuTooltip: jqxTooltipComponent;
  @ViewChild("#staffTooltipReference") staffTooltip: jqxTooltipComponent;
  @ViewChild("#tablesTooltipReference") tablesTooltip: jqxTooltipComponent;
  @ViewChild("#customersTooltipReference") customersTooltip: jqxTooltipComponent;
  @ViewChild("#deliveriesTooltipReference") deliveriesTooltip: jqxTooltipComponent;
  @ViewChild("#paymentsTooltipReference") paymentsTooltip: jqxTooltipComponent;
  @ViewChild("#reservationsTooltipReference") reservationsTooltip: jqxTooltipComponent;
  @ViewChild("#ordersTooltipReference") ordersTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;

  ngOnInit(): void {
  }

}

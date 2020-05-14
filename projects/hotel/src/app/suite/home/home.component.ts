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
  @ViewChild("#billsTooltipReference") billsTooltip: jqxTooltipComponent;
  @ViewChild("#staffTooltipReference") staffTooltip: jqxTooltipComponent;
  @ViewChild("#guestsTooltipReference") guestsTooltip: jqxTooltipComponent;
  @ViewChild("#paymentsTooltipReference") paymentsTooltip: jqxTooltipComponent;
  @ViewChild("#servicesTooltipReference") servicesTooltip: jqxTooltipComponent;
  @ViewChild("#checkInTooltipReference") checkInTooltip: jqxTooltipComponent;
  @ViewChild("#bookingsTooltipReference") bookingsTooltip: jqxTooltipComponent;
  @ViewChild("#roomsTooltipReference") roomsTooltip: jqxTooltipComponent;
  @ViewChild("#assetsTooltipReference") assetsTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;
  
  ngOnInit(): void {
  }

}

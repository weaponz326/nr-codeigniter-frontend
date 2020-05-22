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
  @ViewChild("#stockTooltipReference") stockTooltip: jqxTooltipComponent;
  @ViewChild("#equipmentTooltipReference") equipmentTooltip: jqxTooltipComponent;
  @ViewChild("#purcahsingTooltipReference") purchasingTooltip: jqxTooltipComponent;
  @ViewChild("#ordersTooltipReference") ordersTooltip: jqxTooltipComponent;
  @ViewChild("#manufacturingTooltipReference") manufacturingTooltip: jqxTooltipComponent;
  @ViewChild("#contractorsTooltipReference") contractorsTooltip: jqxTooltipComponent;
  @ViewChild("#workersTooltipReference") workersTooltip: jqxTooltipComponent;
  @ViewChild("#planningTooltipReference") projectsTooltip: jqxTooltipComponent;
  @ViewChild("#productsTooltipReference") productsTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;
  
  ngOnInit(): void {
  }

}

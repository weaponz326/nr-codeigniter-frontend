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
  @ViewChild("#receivablesTooltipReference") receivablesTooltip: jqxTooltipComponent;
  @ViewChild("#productsTooltipReference") productsTooltip: jqxTooltipComponent;
  @ViewChild("#invoiceTooltipReference") invoiceTooltip: jqxTooltipComponent;
  @ViewChild("#markettingTooltipReference") markettingTooltip: jqxTooltipComponent;
  @ViewChild("#payablesTooltipReference") payablesTooltip: jqxTooltipComponent;
  @ViewChild("#salesTooltipReference") salesTooltip: jqxTooltipComponent;
  @ViewChild("#customersTooltipReference") customersTooltip: jqxTooltipComponent;
  @ViewChild("#paymentsTooltipReference") paymentsTooltip: jqxTooltipComponent;
  @ViewChild("#ordersTooltipReference") ordersTooltip: jqxTooltipComponent;
  @ViewChild("#inventoryTooltipReference") inventoryTooltip: jqxTooltipComponent;
  @ViewChild("#purchasingTooltipReference") purchasingTooltip: jqxTooltipComponent;
  @ViewChild("#cashflowTooltipReference") cashflowTooltip: jqxTooltipComponent;
  @ViewChild("#staffTooltipReference") staffTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;
  
  ngOnInit(): void {
  }

}

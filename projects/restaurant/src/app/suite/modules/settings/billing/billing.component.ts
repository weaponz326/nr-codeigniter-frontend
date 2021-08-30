import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor() { }

  @ViewChild('nameReference') name: jqxInputComponent;
  @ViewChild('cardNumberReference') cardNumber: jqxNumberInputComponent;
  @ViewChild('expiryMonthReference') expiryMonth: jqxNumberInputComponent;
  @ViewChild('expiryYearReference') expiryYear: jqxNumberInputComponent;
  @ViewChild('cvcReference') cvc: jqxNumberInputComponent;

  navHeading: any[] = [
    { text: "Billing", url: "/suite/settings/billing" },
  ];

  selectedPlan = 'Individual';
  selectedRate = '';

  ngOnInit(): void {
  }

}

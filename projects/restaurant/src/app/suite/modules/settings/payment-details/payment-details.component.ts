import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SettingsApiService } from '../settings-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('nameReference') name: jqxInputComponent;
  @ViewChild('cardNumberReference') cardNumber: jqxNumberInputComponent;
  @ViewChild('expiryMonthReference') expiryMonth: jqxNumberInputComponent;
  @ViewChild('expiryYearReference') expiryYear: jqxNumberInputComponent;
  @ViewChild('cvcReference') cvc: jqxNumberInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;


  ngOnInit(): void {
  }

}

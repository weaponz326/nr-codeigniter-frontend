import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';

import { LedgerApiService } from '../ledger-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-new-ledger',
  templateUrl: './new-ledger.component.html',
  styleUrls: ['./new-ledger.component.css']
})
export class NewLedgerComponent implements OnInit {

  constructor(
    private router: Router,
    private ledgerApi: LedgerApiService,
  ) { }


  @ViewChild("newLedgerReference") newLedger: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("ledgerCodeReference") ledgerCode: jqxInputComponent;
  @ViewChild("ledgerNameReference") ledgerName: jqxInputComponent;
  @ViewChild("fromDateReference") fromDate: jqxDateTimeInputComponent;
  @ViewChild("toDateReference") toDate: jqxDateTimeInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.newLedger.open();
  }

  saveLedger(){
    this.loadingSpinner.httpLoader.open();

    let ledgerData = {
      enterprise_id: sessionStorage.getItem('enterprise_id'),
      ledger_name: this.ledgerName.val(),
      ledger_code: this.ledgerCode.val(),
      from_date: this.fromDate.val(),
      to_date: this.toDate.val()
    }

    this.ledgerApi.postLedger(ledgerData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('ledger_id', res.ledger_id);
            this.router.navigateByUrl('/suite/ledger/view-ledger');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(ledgerData);
  }

}

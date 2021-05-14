import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';

import { LedgerApiService } from '../ledger-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-view-ledger',
  templateUrl: './view-ledger.component.html',
  styleUrls: ['./view-ledger.component.css']
})
export class ViewLedgerComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private ledgerApi: LedgerApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild("ledgerCodeReference") ledgerCode: jqxInputComponent;
  @ViewChild("ledgerNameReference") ledgerName: jqxInputComponent;
  @ViewChild("fromDateReference") fromDate: jqxDateTimeInputComponent;
  @ViewChild("toDateReference") toDate: jqxDateTimeInputComponent;

  navHeading: any[] = [
    { text: "All Ledger", url: "/suite/ledger/all-ledger" },
    { text: "View Ledger", url: "/suite/ledger/view-ledger" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.ledgerApi.getSingleLedger()
      .subscribe(
        res => {
          console.log(res);
          this.ledgerCode.val(res.ledger_code);
          this.ledgerName.val(res.ledger_name);
          this.fromDate.val(res.from_date);
          this.toDate.val(res.to_date);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveLedger(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a ledger");

    var ledgerData = {
      account: sessionStorage.getItem('enterprise_id'),
      ledger_code: this.ledgerCode.val(),
      ledger_name: this.ledgerName.val(),
      from_date: this.fromDate.val(),
      to_date: this.toDate.val(),
    }

    this.ledgerApi.putLedger(ledgerData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(ledgerData);
  }

  deleteLedger(){
    console.log("dude... u are gonna delete the ledger?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.ledgerApi.deleteLedger()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/ledger/all-ledger');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
